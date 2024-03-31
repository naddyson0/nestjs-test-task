import { Injectable } from '@nestjs/common';
import { OrderService } from '../order/interfaces/order-service.interface';
import { ShopifyOrderService } from '../shopify/order/order.shopify.service';
import { ShopifyProductService } from '../shopify/product/product.shopify.service';
import { ProductService } from '../product/interfaces/product-service.interface';
import { PlatformInterface } from './platform.interface';

@Injectable()
export class PlatformFactory implements PlatformInterface {
  constructor(
    private readonly shopifyOrderService: ShopifyOrderService,
    private readonly shopifyProductService: ShopifyProductService,
  ) {}

  getOrderService(platform: string): OrderService {
    switch (platform) {
      case 'shopify':
        return this.shopifyOrderService;
      default:
        throw new Error('Invalid platform/not supported');
    }
  }

  getProductService(platform: string): ProductService {
    switch (platform) {
      case 'shopify':
        return this.shopifyProductService;
      default:
        throw new Error('Invalid platform/not supported');
    }
  }
}
