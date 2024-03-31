import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { OrderService } from '../../order/interfaces/order-service.interface';

import { ShopifyApiService } from '../api.shopify.service';
import { OrderEntity } from '../../order/entities/order.entity';
import { PriceDetails } from '../../price-details/price-details.entity';
import { OrderItemEntity } from '../../order/entities/order-item.entity';

@Injectable()
export class ShopifyOrderService implements OrderService {
  constructor(private readonly shopifyApiService: ShopifyApiService) {}

  async findOne(id: string): Promise<any> {
    try {
      const res = await this.shopifyApiService.get<any>(`orders/${id}.json`);
      return res?.data?.order;
    } catch (err) {
      if (err.response.status === 404) {
        return null;
      }
      console.error(`Error fetching order ${id}:`, err);
      throw new InternalServerErrorException({ shopifyError: err.response.data });
    }
  }

  async findAll(): Promise<any[]> {
    try {
      const res = await this.shopifyApiService.get<any>('orders.json');
      return res?.data?.orders;
    } catch (err) {
      console.error('Error fetching orders:', err);
      throw new InternalServerErrorException({ shopifyError: err.response.data });
    }
  }

  transformResponseData(order: any): OrderEntity {
    const id: string = `${order.id}`;
    const name: string = order.name;

    const priceDetails: PriceDetails = {
      shopPrice: {
        amount: +order.subtotal_price_set?.shop_money.amount || null,
        currency: order.subtotal_price_set?.shop_money.currency_code,
      },
      presentmentPrice: {
        amount: +order.subtotal_price_set?.presentment_money.amount || null,
        currency: order.subtotal_price_set?.presentment_money.currency_code,
      },
    };

    let items: OrderItemEntity[] = order.line_items.map((orderItem) => {
      return {
        id: `${orderItem.id}`,
        name: orderItem.name,
        weight: orderItem.quantity,
        weightUnit: orderItem.quantity,
        priceDetails: {
          shopPrice: {
            amount: +orderItem.price_set?.shop_money.amount || null,
            currency: orderItem.price_set?.shop_money.currency_code,
          },
          presentmentPrice: {
            amount: +orderItem.price_set?.presentment_money.amount || null,
            currency: orderItem.price_set?.presentment_money.currency_code,
          },
        },
        productId: `${orderItem.product_id}`,
        quantity: orderItem.quantity,
        sku: orderItem.sku,
        variantId: `${orderItem.variant_id}`,
        tax: {
          shopPrice: {
            amount: +orderItem.tax_set?.shop_money.amount || null,
            currency: orderItem.tax_set?.shop_money.currency_code,
          },
          presentmentPrice: {
            amount: +orderItem.tax_set?.presentment_money.amount || null,
            currency: orderItem.tax_set?.presentment_money.currency_code,
          },
        },
      };
    });

    items = this.splitMultipleQuantityOrderItems(items);

    const orderEntity: OrderEntity = {
      id,
      name,
      priceDetails,
      items,
    };

    return orderEntity;
  }

  private splitMultipleQuantityOrderItems(
    orderItems: OrderItemEntity[],
  ): OrderItemEntity[] {
    return orderItems.reduce((acc, orderItem) => {
      if (orderItem.quantity > 1) {
        for (let i = 0; i < orderItem.quantity; i++) {
          acc.push({ ...orderItem, quantity: 1 });
        }
      } else {
        acc.push(orderItem);
      }
      return acc;
    }, []);
  }
}
