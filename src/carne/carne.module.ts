import { Module } from '@nestjs/common';
import { CarneService } from './carne.service';
import { CarneController } from './carne.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarneRepository } from './repositories/carne.repository';

@Module({
  controllers: [CarneController],
  providers: [CarneService, PrismaService, CarneRepository],
})
export class CarneModule {}
