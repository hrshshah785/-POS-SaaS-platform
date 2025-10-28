import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { v4 as uuid } from 'uuid';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({ origin: true, credentials: true });
  app.use((req: any, _res: any, next: any) => {
    req.reqId = uuid();
    next();
  });
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
