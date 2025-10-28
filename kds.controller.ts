import { Controller, Post, Patch, Body, Param } from '@nestjs/common';
import { KdsService } from './kds.service';

@Controller('kots')
export class KdsController {
  constructor(private readonly kdsService: KdsService) {}

  @Post()
  async createKOT(@Body() data: any) {
    return this.kdsService.createKOT(data);
  }

  @Patch(':id')
  async updateKOT(@Param('id') id: string, @Body('status') status: string) {
    return this.kdsService.updateKOT(id, status);
  }
}
