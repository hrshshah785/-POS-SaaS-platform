import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async getMenu(tenantId: string) {
    return {
      categories: await this.prisma.category.findMany({
        where: { tenantId },
        include: {
          items: {
            include: {
              variants: true
            }
          }
        }
      }),
      modifierGroups: await this.prisma.modifierGroup.findMany({
        where: { tenantId },
        include: { modifiers: true }
      })
    };
  }

  async createItem(data: any) {
    return this.prisma.item.create({ data });
  }

  async updateItem(id: string, data: any) {
    return this.prisma.item.update({ where: { id }, data });
  }
}
