import { PartialType } from '@nestjs/mapped-types';
import { CreatePaoDto } from './create-pao.dto';

export class UpdatePaoDto extends PartialType(CreatePaoDto) {}
