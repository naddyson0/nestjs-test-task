import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { ShopifyApiService } from './api.shopify.service';
import { ShopifyOrderService } from './order/order.shopify.service';
import { ShopifyProductService } from './product/product.shopify.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [],
  providers: [ShopifyApiService, ShopifyOrderService, ShopifyProductService],
  exports: [ShopifyApiService, ShopifyOrderService, ShopifyProductService],
})
export class ShopifyModule {}
