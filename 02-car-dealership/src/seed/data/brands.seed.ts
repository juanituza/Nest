import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];
