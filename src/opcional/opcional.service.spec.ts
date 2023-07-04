import { Test, TestingModule } from '@nestjs/testing';
import { OpcionalService } from './opcional.service';

describe('OpcionalService', () => {
  let service: OpcionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcionalService],
    }).compile();

    service = module.get<OpcionalService>(OpcionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
