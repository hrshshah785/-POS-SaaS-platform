import { Controller, Post, Patch, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() data: any) {
    return this.ordersService.createOrder(data);
  }

  @Post(':id/items')
  async addOrderItem(@Param('id') id: string, @Body() data: any) {
    return this.ordersService.addOrderItem(id, data);
  }

  @Patch(':id/status')
  async updateOrderStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.ordersService.updateOrderStatus(id, status);
  }
}
