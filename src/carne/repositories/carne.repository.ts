import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarneDto } from '../dto/create-carne.dto';
import { UpdateCarneDto } from '../dto/update-carne.dto';

@Injectable()
export class CarneRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarneDto: CreateCarneDto): Promise<CreateCarneDto> {
    return this.prisma.carne.create({
      data: createCarneDto,
    });
  }

  async findAll(): Promise<CreateCarneDto[]> {
    return this.prisma.carne.findMany();
  }

  async findOne(id: number): Promise<CreateCarneDto> {
    return this.prisma.carne.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateCarneDto: UpdateCarneDto,
  ): Promise<CreateCarneDto> {
    return this.prisma.carne.update({
      where: {
        id,
      },
      data: updateCarneDto,
    });
  }

  async remove(id: number): Promise<CreateCarneDto> {
    return this.prisma.carne.delete({
      where: {
        id,
      },
    });
  }
}
