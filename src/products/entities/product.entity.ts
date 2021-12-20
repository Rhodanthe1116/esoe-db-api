import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  inventory: number;

  @Column()
  price: number;

  @Column()
  startSaleTime: Date;

  @Column()
  endSaleTime: Date;
}
