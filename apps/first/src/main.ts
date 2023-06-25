import { NestFactory } from '@nestjs/core';
import { FirstModule } from './first.module';

async function bootstrap() {
  console.log("Bootstraping the first service ...")
  const app = await NestFactory.create(FirstModule);
  await app.listen(3000);
}
bootstrap();