import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class KdsService {
  constructor(private prisma: PrismaService) {}

  async createKOT(data: any) {
  return this.prisma.kot.create({ data });
  }

  async updateKOT(id: string, status: string) {
  return this.prisma.kot.update({ where: { id }, data: { status } });
  }
}
