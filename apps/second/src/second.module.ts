import { Module } from '@nestjs/common';
import { SecondController } from './second.controller';
import { SecondService } from './second.service';

@Module({
  imports: [],
  controllers: [SecondController],
  providers: [SecondService],
})
export class SecondModule {}
