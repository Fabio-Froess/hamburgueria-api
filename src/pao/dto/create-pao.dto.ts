import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaoDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
