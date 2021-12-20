import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export enum UserType {
  買家 = '買家',
  賣家 = '賣家',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: UserType;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];
}
