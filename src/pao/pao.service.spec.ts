import { Test, TestingModule } from '@nestjs/testing';
import { PaoService } from './pao.service';

describe('PaoService', () => {
  let service: PaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaoService],
    }).compile();

    service = module.get<PaoService>(PaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
