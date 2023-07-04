import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarneService } from './carne.service';
import { CreateCarneDto } from './dto/create-carne.dto';
import { UpdateCarneDto } from './dto/update-carne.dto';

@Controller('carne')
export class CarneController {
  constructor(private readonly carneService: CarneService) {}

  @Post()
  create(@Body() createCarneDto: CreateCarneDto) {
    return this.carneService.create(createCarneDto);
  }

  @Get()
  findAll() {
    return this.carneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarneDto: UpdateCarneDto) {
    return this.carneService.update(+id, updateCarneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carneService.remove(+id);
  }
}
