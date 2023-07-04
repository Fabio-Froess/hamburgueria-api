import { Test, TestingModule } from '@nestjs/testing';
import { OpcionalController } from './opcional.controller';
import { OpcionalService } from './opcional.service';

describe('OpcionalController', () => {
  let controller: OpcionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionalController],
      providers: [OpcionalService],
    }).compile();

    controller = module.get<OpcionalController>(OpcionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
