import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: any) {
    return this.prisma.order.create({ data });
  }

  async addOrderItem(orderId: string, data: any) {
  return this.prisma.orderItem.create({ data: { ...data, orderId } });
  }

  async updateOrderStatus(id: string, status: string) {
    return this.prisma.order.update({ where: { id }, data: { status } });
  }
}
