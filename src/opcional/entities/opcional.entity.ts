import { Opcional } from '@prisma/client';

export class OpcionalEntity implements Opcional {
  id: number;
  tipo: string;
}
