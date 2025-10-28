import { Controller, Get, Post, Patch, Body, Param, Query } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getMenu(@Query('tenantId') tenantId: string) {
    return this.menuService.getMenu(tenantId);
  }

  @Post('items')
  async createItem(@Body() data: any) {
    return this.menuService.createItem(data);
  }

  @Patch('items/:id')
  async updateItem(@Param('id') id: string, @Body() data: any) {
    return this.menuService.updateItem(id, data);
  }
}
