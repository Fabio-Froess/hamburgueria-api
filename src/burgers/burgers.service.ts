import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { BurgersRepository } from './repositories/burgers.repository';

@Injectable()
export class BurgersService {
  constructor(private readonly repository: BurgersRepository) {}

  create(createBurgerDto: CreateBurgerDto) {
    return this.repository.create(createBurgerDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateBurgerDto: UpdateBurgerDto) {
    return this.repository.update(id, updateBurgerDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
