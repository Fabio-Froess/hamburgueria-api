import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarneDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
