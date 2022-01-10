import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductOrder {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @ManyToOne(() => Order, (order) => order.productOrders, {
    primary: true,
    eager: false,
  })
  @JoinColumn()
  order: Order;

  @ManyToOne(
    () => Product,
    null /* No usecase of Product -> ProductOrder reference */,
    { primary: true },
  )
  @JoinColumn()
  product: Product;

  @Column()
  amount: number;
}
