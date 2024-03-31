import { OrderService } from '../order/interfaces/order-service.interface';
import { ProductService } from '../product/interfaces/product-service.interface';

export interface PlatformInterface {
  getOrderService(platform: string): OrderService;

  getProductService(platform: string): ProductService;
}
