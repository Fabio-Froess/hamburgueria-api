import { Module } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { BurgersController } from './burgers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BurgersRepository } from './repositories/burgers.repository';

@Module({
  controllers: [BurgersController],
  providers: [BurgersService, PrismaService, BurgersRepository],
})
export class BurgersModule {}
