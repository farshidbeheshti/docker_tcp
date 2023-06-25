import { Test, TestingModule } from '@nestjs/testing';
import { FirstService } from './first.service';

describe('FirstService', () => {
  let service: FirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstService],
    }).compile();

    service = module.get<FirstService>(FirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
