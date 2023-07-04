import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaoDto } from '../dto/create-pao.dto';
import { UpdatePaoDto } from '../dto/update-pao.dto';

@Injectable()
export class PaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaoDto: CreatePaoDto): Promise<CreatePaoDto> {
    return this.prisma.pao.create({
      data: createPaoDto,
    });
  }

  async findAll(): Promise<CreatePaoDto[]> {
    return this.prisma.pao.findMany();
  }

  async findOne(id: number): Promise<CreatePaoDto> {
    return this.prisma.pao.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePaoDto: UpdatePaoDto): Promise<CreatePaoDto> {
    return this.prisma.pao.update({
      where: {
        id,
      },
      data: updatePaoDto,
    });
  }

  async remove(id: number): Promise<CreatePaoDto> {
    return this.prisma.pao.delete({
      where: {
        id,
      },
    });
  }
}
