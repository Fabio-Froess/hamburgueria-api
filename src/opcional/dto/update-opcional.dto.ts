import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcionalDto } from './create-opcional.dto';

export class UpdateOpcionalDto extends PartialType(CreateOpcionalDto) {}
