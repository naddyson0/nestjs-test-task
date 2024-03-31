import { CreateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';

export interface ProductService {
  createProduct(createProductDto: CreateProductDto): Promise<any>;
  transformResponseData(product: any): ProductEntity;
  transformRequestData(data: CreateProductDto): any;
}
