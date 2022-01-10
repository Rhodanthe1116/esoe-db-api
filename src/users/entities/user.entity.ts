import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  買家 = '買家',
  賣家 = '賣家',
}
export type Role = UserType;

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
  password: string;

  @Column()
  phone: string;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];
}
