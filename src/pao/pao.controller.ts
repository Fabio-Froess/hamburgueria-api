import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaoService } from './pao.service';
import { CreatePaoDto } from './dto/create-pao.dto';
import { UpdatePaoDto } from './dto/update-pao.dto';

@Controller('pao')
export class PaoController {
  constructor(private readonly paoService: PaoService) {}

  @Post()
  create(@Body() createPaoDto: CreatePaoDto) {
    return this.paoService.create(createPaoDto);
  }

  @Get()
  findAll() {
    return this.paoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaoDto: UpdatePaoDto) {
    return this.paoService.update(+id, updatePaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paoService.remove(+id);
  }
}
