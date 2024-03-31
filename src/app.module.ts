import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './config/app.config';
import { PlatformFactory } from './platform/platform.factory';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ShopifyModule } from './shopify/shopify.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    OrderModule,
    ProductModule,
    ShopifyModule,
  ],
  controllers: [],
  providers: [PlatformFactory],
})
export class AppModule {}
