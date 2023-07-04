import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOpcionalDto } from '../dto/create-opcional.dto';
import { UpdateOpcionalDto } from '../dto/update-opcional.dto';

@Injectable()
export class OpcionalRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createOpcionalDto: CreateOpcionalDto,
  ): Promise<CreateOpcionalDto> {
    return this.prisma.opcional.create({
      data: createOpcionalDto,
    });
  }

  async findAll(): Promise<CreateOpcionalDto[]> {
    return this.prisma.opcional.findMany();
  }

  async findOne(id: number): Promise<CreateOpcionalDto> {
    return this.prisma.opcional.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateOpcionalDto: UpdateOpcionalDto,
  ): Promise<CreateOpcionalDto> {
    return this.prisma.opcional.update({
      where: {
        id,
      },
      data: updateOpcionalDto,
    });
  }

  async remove(id: number): Promise<CreateOpcionalDto> {
    return this.prisma.opcional.delete({
      where: {
        id,
      },
    });
  }
}
