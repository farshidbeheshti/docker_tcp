import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondService {
  getHello(): string {
    return 'Hello TCP!';
  }
}
