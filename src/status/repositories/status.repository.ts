import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { CreateStatusDto } from '../dto/create-status.dto';

@Injectable()
export class StatusRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStatusDto: CreateStatusDto): Promise<CreateStatusDto> {
    return this.prisma.status.create({
      data: createStatusDto,
    });
  }

  async findAll(): Promise<CreateStatusDto[]> {
    return this.prisma.status.findMany();
  }

  async findOne(id: number): Promise<CreateStatusDto> {
    return this.prisma.status.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateStatusDto: UpdateStatusDto,
  ): Promise<CreateStatusDto> {
    return this.prisma.status.update({
      where: {
        id,
      },
      data: updateStatusDto,
    });
  }

  async remove(id: number): Promise<CreateStatusDto> {
    return this.prisma.status.delete({
      where: {
        id,
      },
    });
  }
}
