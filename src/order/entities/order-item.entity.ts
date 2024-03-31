import { PriceDetails } from '../../price-details/price-details.entity';

export class OrderItemEntity {
  id: string;
  name: string;
  weight: string;
  weightUnit: string;
  priceDetails: PriceDetails;
  productId: string;
  quantity: number;
  sku: string;
  variantId: string;
  tax: PriceDetails;
}
