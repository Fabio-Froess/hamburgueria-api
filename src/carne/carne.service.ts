import { Injectable } from '@nestjs/common';
import { CreateCarneDto } from './dto/create-carne.dto';
import { UpdateCarneDto } from './dto/update-carne.dto';
import { CarneRepository } from './repositories/carne.repository';

@Injectable()
export class CarneService {
  constructor(private readonly repository: CarneRepository) {}

  create(createCarneDto: CreateCarneDto) {
    return this.repository.create(createCarneDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCarneDto: UpdateCarneDto) {
    return this.repository.update(id, updateCarneDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
