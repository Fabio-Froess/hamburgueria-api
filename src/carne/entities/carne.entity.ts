import { Carne } from '@prisma/client';

export class CarneEntity implements Carne {
  id: number;
  tipo: string;
}
