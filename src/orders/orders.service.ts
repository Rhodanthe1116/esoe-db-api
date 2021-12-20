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

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepo.save(createOrderDto);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return this.orderRepo.findOne(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderRepo.save({ id, ...updateOrderDto });
  }

  remove(id: number) {
    return this.orderRepo.delete(id);
  }
}
