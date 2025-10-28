import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('daily-sales')
  async dailySales(@Query('date') date: string) {
    const start = new Date(date + 'T00:00:00.000Z');
    const end = new Date(date + 'T23:59:59.999Z');
    const orders = await this.prisma.order.findMany({
      where: {
        createdAt: { gte: start, lte: end },
        status: 'PAID',
      },
      select: { total: true }
    });
    const total = orders.reduce((sum, o) => sum + Number(o.total), 0);
    return { date, total, orderCount: orders.length };
  }
}
