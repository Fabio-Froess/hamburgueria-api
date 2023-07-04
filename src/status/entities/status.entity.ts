import { Status } from '@prisma/client';

export class StatusEntity implements Status {
  id: number;
  tipo: string;
}
