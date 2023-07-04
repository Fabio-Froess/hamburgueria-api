import { Test, TestingModule } from '@nestjs/testing';
import { CarneService } from './carne.service';

describe('CarneService', () => {
  let service: CarneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarneService],
    }).compile();

    service = module.get<CarneService>(CarneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
