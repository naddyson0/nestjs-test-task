import { OrderEntity } from '../entities/order.entity';

export interface OrderService {
  findOne(id: string): Promise<any>;
  findAll(): Promise<any[]>;
  transformResponseData(order: any): OrderEntity;
}
