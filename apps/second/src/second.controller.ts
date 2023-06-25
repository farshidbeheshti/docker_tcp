import { Controller, Get } from '@nestjs/common';
import { SecondService } from './second.service';
import {MessagePattern, Payload} from '@nestjs/microservices';
@Controller()
export class SecondController {
  constructor(private readonly secondService: SecondService) {}

  @MessagePattern('test_signal')
  TCP_Test(@Payload() data:number ) {
    return `Hello TCP Farshid... ${data}`;
  }

  @Get()
  getHello(): string {
    return this.secondService.getHello();
  }
}
