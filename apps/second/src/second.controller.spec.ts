import { Test, TestingModule } from '@nestjs/testing';
import { SecondController } from './second.controller';
import { SecondService } from './second.service';

describe('SecondController', () => {
  let secondController: SecondController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondController],
      providers: [SecondService],
    }).compile();

    secondController = app.get<SecondController>(SecondController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondController.getHello()).toBe('Hello World!');
    });
  });
});
