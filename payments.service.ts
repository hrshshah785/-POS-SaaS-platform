import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async addPayment(orderId: string, data: any) {
  return this.prisma.payment.create({ data: { ...data, orderId } });
  }
}
