import { Module } from '@nestjs/common';
import { PaoService } from './pao.service';
import { PaoController } from './pao.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaoRepository } from './repositories/pao.repository';

@Module({
  controllers: [PaoController],
  providers: [PaoService, PrismaService, PaoRepository],
})
export class PaoModule {}
