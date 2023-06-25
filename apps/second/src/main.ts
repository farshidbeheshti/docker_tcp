import { NestFactory } from '@nestjs/core';
import { SecondModule } from './second.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(SecondModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001)
}
bootstrap();
