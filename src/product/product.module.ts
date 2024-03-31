import { Module } from '@nestjs/common';

import { ShopifyModule } from '../shopify/shopify.module';

import { ProductController } from './product.controller';
import { PlatformFactory } from '../platform/platform.factory';

@Module({
  imports: [ShopifyModule],
  controllers: [ProductController],
  providers: [PlatformFactory],
})
export class ProductModule {}
