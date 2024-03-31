import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductService } from '../../product/interfaces/product-service.interface';
import { CreateProductDto } from '../../product/dto/create-product.dto';

import { ProductEntity } from '../../product/entities/product.entity';
import { ShopifyApiService } from '../api.shopify.service';

@Injectable()
export class ShopifyProductService implements ProductService {
  constructor(private readonly shopifyApiService: ShopifyApiService) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    try {
      const product = this.transformRequestData(createProductDto);
      const res = await this.shopifyApiService.post<any>('products.json', {
        product,
      });
      return res?.data?.product;
    } catch (err) {
      console.error(`Error creating Shopify product:`, err);
      throw new InternalServerErrorException({ shopifyError: err.response.data });
    }
  }

  transformRequestData(data: CreateProductDto): any {
    return {
      ...data,
      product_type: data.type,
      body_html: data.description,
    };
  }

  transformResponseData(product: any): ProductEntity {
    const id: string = `${product.id}`;
    const title: string = product.title;

    return {
      id,
      title,
      description: product.body_html,
      vendor: product.vendor,
      status: product.status,
      type: product.product_type,
      tags: product.tags.split(',').filter((t) => t),
      createdAt: product.created_at,
      updatedAt: product.updated_at,
    };
  }
}
