import { Controller, Post, Body, Param } from '@nestjs/common';

import { PlatformFactory } from '../platform/platform.factory';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('product/:platform')
export class ProductController {
  constructor(private readonly platformFactory: PlatformFactory) {}

  @Post()
  @ApiParam({ name: 'platform', enum: ['shopify'] })
  async create(
    @Param('platform') platform: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    const productService = this.platformFactory.getProductService('shopify');

    const product = await productService.createProduct(createProductDto);
    return productService.transformResponseData(product);
  }
}
