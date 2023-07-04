import { Injectable } from '@nestjs/common';
import { CreateOpcionalDto } from './dto/create-opcional.dto';
import { UpdateOpcionalDto } from './dto/update-opcional.dto';
import { OpcionalRepository } from './repositories/opcional.repository';

@Injectable()
export class OpcionalService {
  constructor(private readonly repository: OpcionalRepository) {}

  create(createOpcionalDto: CreateOpcionalDto) {
    return this.repository.create(createOpcionalDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateOpcionalDto: UpdateOpcionalDto) {
    return this.repository.update(id, updateOpcionalDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
