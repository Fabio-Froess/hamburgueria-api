import { Burgers } from '@prisma/client';

export class BurgerEntity implements Burgers {
  id: number;
  nome: string;
  carneId: number;
  paoId: number;
  opcionaisId: number;
  statusId: number;
}
