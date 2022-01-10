import { Auth } from 'src/auth/auth.decorator';
import { User } from 'src/auth/user.decorator';
import { User as UserEntity, UserType } from 'src/users/entities/user.entity';

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@ApiTags('Order')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Auth(UserType.買家, UserType.賣家)
  @Post()
  create(@User() user: UserEntity, @Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(user.id, createOrderDto);
  }

  @Auth(UserType.買家, UserType.賣家)
  @Get()
  findAll(@User() user: UserEntity) {
    return this.ordersService.findAll(user);
  }

  @Auth(UserType.買家, UserType.賣家)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordersService.remove(+id);
  // }
}
