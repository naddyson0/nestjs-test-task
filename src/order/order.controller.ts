import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { OrderService } from './interfaces/order-service.interface';
import { PlatformFactory } from '../platform/platform.factory';
import { ApiParam } from '@nestjs/swagger';

@Controller()
export class OrderController {
  constructor(private readonly platformFactory: PlatformFactory) {}

  @Get('orders/:platform')
  @ApiParam({ name: 'platform', enum: ['shopify'] })
  async findAll(@Param('platform') platform: string) {
    const orderService = this.platformFactory.getOrderService(
      platform,
    ) as OrderService;

    const orders = await orderService.findAll();

    return orders.map((order) => orderService.transformResponseData(order));
  }

  @Get('order/:platform/:id')
  @ApiParam({ name: 'platform', enum: ['shopify'] })
  async findOne(@Param('platform') platform: string, @Param('id') id: string) {
    const orderService = this.platformFactory.getOrderService(
      platform,
    ) as OrderService;

    const order = await orderService.findOne(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return orderService.transformResponseData(order);
  }
}
