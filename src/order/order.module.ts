import { Module } from '@nestjs/common';

import { ShopifyModule } from '../shopify/shopify.module';
import { OrderController } from './order.controller';
import { PlatformFactory } from '../platform/platform.factory';

@Module({
  imports: [ShopifyModule],
  controllers: [OrderController],
  providers: [PlatformFactory],
})
export class OrderModule {}
