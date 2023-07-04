import { Module } from '@nestjs/common';
import { OpcionalService } from './opcional.service';
import { OpcionalController } from './opcional.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { OpcionalRepository } from './repositories/opcional.repository';

@Module({
  controllers: [OpcionalController],
  providers: [OpcionalService, PrismaService, OpcionalRepository],
})
export class OpcionalModule {}
