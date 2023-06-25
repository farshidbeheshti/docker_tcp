import { Test, TestingModule } from '@nestjs/testing';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';

describe('FirstController', () => {
  let controller: FirstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstController],
      providers: [FirstService],
    }).compile();

    controller = module.get<FirstController>(FirstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
