import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Order } from './orders/entities/order.entity';
import { ProductOrder } from './product-orders/entities/product-order.entity';
import { Product } from './products/entities/product.entity';
import { User } from './users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'sqlite',
  entities: [User, Product, Order, ProductOrder],
  synchronize: true,
};
