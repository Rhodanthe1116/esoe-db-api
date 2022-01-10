import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductOrder } from './entities/product-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrder])],
  controllers: [],
  providers: [],
})
export class ProductOrdersModule {}
