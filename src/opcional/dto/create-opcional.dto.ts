import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOpcionalDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
