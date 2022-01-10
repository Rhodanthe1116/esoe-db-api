import { ProductOrder } from 'src/product-orders/entities/product-order.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {}

  create(buyerId: number, createOrderDto: CreateOrderDto): Promise<Order> {
    const productOrders = createOrderDto.productOrders.map((p) => {
      const newPO = new ProductOrder();
      newPO.productId = p.productId;
      newPO.amount = p.amount;
      return newPO;
    });

    // const newOrder = new Order();
    // newOrder.productOrders = productOrders;
    return this.orderRepo.save({ buyerId, ...createOrderDto, productOrders });
  }

  findAll(user: User) {
    return this.orderRepo.find({
      where: { buyerId: user.id },
      relations: ['buyer', 'productOrders', 'productOrders.product'],
      order: { timestamp: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.orderRepo.findOne(id, {
      relations: ['buyer', 'productOrders', 'productOrders.product'],
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderRepo.save({ id, ...updateOrderDto });
  }

  remove(id: number) {
    return this.orderRepo.delete(id);
  }
}
