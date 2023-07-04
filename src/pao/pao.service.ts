import { Injectable } from '@nestjs/common';
import { CreatePaoDto } from './dto/create-pao.dto';
import { UpdatePaoDto } from './dto/update-pao.dto';
import { PaoRepository } from './repositories/pao.repository';

@Injectable()
export class PaoService {
  constructor(private readonly repository: PaoRepository) {}

  create(createPaoDto: CreatePaoDto) {
    return this.repository.create(createPaoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePaoDto: UpdatePaoDto) {
    return this.repository.update(id, updatePaoDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
