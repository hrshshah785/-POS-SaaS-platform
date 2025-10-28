import { Controller, Post, Param, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('orders/:orderId/payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async addPayment(@Param('orderId') orderId: string, @Body() data: any) {
    return this.paymentsService.addPayment(orderId, data);
  }
}
