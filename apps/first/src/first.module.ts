import { Module } from '@nestjs/common';
import { FirstService } from './first.service';
import { FirstController } from './first.controller';
import {ClientsModule, Transport} from '@nestjs/microservices'

@Module({
  imports: [ClientsModule.register([
    {
      name: 'FIRST_SERVICE',
      options: {
        host: 'second',
        port: 3002,
      }
    }
  ])],
  controllers: [FirstController],
  providers: [FirstService]
})
export class FirstModule {}
