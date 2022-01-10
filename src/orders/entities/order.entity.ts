import { ProductOrder } from 'src/product-orders/entities/product-order.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
