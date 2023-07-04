import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBurgerDto } from '../dto/create-burger.dto';
import { UpdateBurgerDto } from '../dto/update-burger.dto';
import { Burgers } from '@prisma/client';

@Injectable()
export class BurgersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBurgerDto) {
    const burger = await this.prisma.burgers.create({
      data: {
        nome: data.nome,
        carneId: data.carneId,
        paoId: data.paoId,
        statusId: data.statusId,
      },
    });

    if (data.lista_opcionais.length > 0) {
      const opcionais_burger = data.lista_opcionais.map(opcionalId => {
        return {
          opcionalId,
          burgerId: burger.id,
        };
      });

      await this.prisma.opcionais_Burgers.createMany({
        data: opcionais_burger,
      });
    }
  }

  async findAll(): Promise<any[]> {
    return this.prisma.burgers.findMany({
      include: {
        carne: true,
        opcionais_burgers: true,
        pao: true,
        status: true,
      },
    });
  }

  async findOne(id: number): Promise<Burgers> {
    return this.prisma.burgers.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBurgerDto: UpdateBurgerDto): Promise<Burgers> {
    return this.prisma.burgers.update({
      where: {
        id,
      },
      data: updateBurgerDto,
    });
  }

  async remove(id: number): Promise<Burgers> {
    return this.prisma.burgers.delete({
      where: {
        id,
      },
    });
  }
}
