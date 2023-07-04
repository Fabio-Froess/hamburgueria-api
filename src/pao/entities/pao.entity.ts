import { Pao } from '@prisma/client';

export class PaoEntity implements Pao {
  id: number;
  tipo: string;
}
