import { PrismaClient } from '@prisma/client';

const MPrisma = {
  instance: new PrismaClient(),
};

export type IDBClient = typeof MPrisma;

Object.freeze(MPrisma);

export default MPrisma;