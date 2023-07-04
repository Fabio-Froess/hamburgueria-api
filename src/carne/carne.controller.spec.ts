import { Test, TestingModule } from '@nestjs/testing';
import { CarneController } from './carne.controller';
import { CarneService } from './carne.service';

describe('CarneController', () => {
  let controller: CarneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarneController],
      providers: [CarneService],
    }).compile();

    controller = module.get<CarneController>(CarneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
