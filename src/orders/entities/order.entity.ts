import { ProductOrder } from 'src/product-orders/entities/product-order.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buyerId: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'buyerId' })
  buyer: User;

  // @Column()
  // buyerName: string;
  // @Column()
  // buyerEmail: string;
  // @Column()
  // buyerPhone: string;

  @CreateDateColumn()
  timestamp: Date;

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.order, {
    cascade: true,
  })
  productOrders: ProductOrder[];
}
