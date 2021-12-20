import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buyerId: number;

  @JoinColumn({ name: 'buyerId' })
  @ManyToOne(() => User, (user) => user.orders)
  buyer: User;

  @Column()
  buyerName: string;
  @Column()
  buyerEmail: string;
  @Column()
  buyerPhone: string;

  @Column()
  timestamp: Date;

  @OneToMany(
    () => Product,
    null /* No usecase of Product -> Orders reference */,
  )
  products: Product[];
}
