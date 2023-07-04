import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusRepository } from './repositories/status.repository';

@Module({
  controllers: [StatusController],
  providers: [StatusService, PrismaService, StatusRepository],
})
export class StatusModule {}
