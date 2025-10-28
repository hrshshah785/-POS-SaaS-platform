import { ReportsController } from './reports.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { KdsService } from './kds.service';
import { KdsController } from './kds.controller';

@Module({
  imports: [],
  controllers: [AppController, MenuController, OrdersController, PaymentsController, KdsController, ReportsController],
  providers: [PrismaService, MenuService, OrdersService, PaymentsService, KdsService],
})
export class AppModule {}
