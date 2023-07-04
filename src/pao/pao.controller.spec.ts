import { Test, TestingModule } from '@nestjs/testing';
import { PaoController } from './pao.controller';
import { PaoService } from './pao.service';

describe('PaoController', () => {
  let controller: PaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaoController],
      providers: [PaoService],
    }).compile();

    controller = module.get<PaoController>(PaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
