import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpcionalService } from './opcional.service';
import { CreateOpcionalDto } from './dto/create-opcional.dto';
import { UpdateOpcionalDto } from './dto/update-opcional.dto';

@Controller('opcional')
export class OpcionalController {
  constructor(private readonly opcionalService: OpcionalService) {}

  @Post()
  create(@Body() createOpcionalDto: CreateOpcionalDto) {
    return this.opcionalService.create(createOpcionalDto);
  }

  @Get()
  findAll() {
    return this.opcionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOpcionalDto: UpdateOpcionalDto,
  ) {
    return this.opcionalService.update(+id, updateOpcionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionalService.remove(+id);
  }
}
