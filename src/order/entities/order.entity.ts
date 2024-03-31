import { PriceDetails } from '../../price-details/price-details.entity';
import { OrderItemEntity } from './order-item.entity';

export class OrderEntity {
  id: string;
  name: string;
  priceDetails: PriceDetails;
  items: OrderItemEntity[];
}
