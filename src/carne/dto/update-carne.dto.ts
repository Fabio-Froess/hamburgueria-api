import { PartialType } from '@nestjs/mapped-types';
import { CreateCarneDto } from './create-carne.dto';

export class UpdateCarneDto extends PartialType(CreateCarneDto) {}
