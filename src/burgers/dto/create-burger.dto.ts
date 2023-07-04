import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBurgerDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  carneId: number;

  @IsNumber()
  paoId: number;

  @IsArray()
  @IsOptional()
  lista_opcionais: number[];

  @IsNumber()
  statusId: number;
}
