// import { ProductOrder } from 'src/product-orders/entities/product-order.entity';
// import { User } from 'src/users/entities/user.entity';
// import { Repository } from 'typeorm';

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';

// import { CreateOrderDto } from './dto/create-order.dto';
// import { CreateProductOrderDto } from './dto/create-product-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';
// import { Order } from './entities/order.entity';

// @Injectable()
// export class ProductOrdersService {
//   constructor(
//     @InjectRepository(Order)
//     private productOrderRepo: Repository<ProductOrder>,
//   ) {}

//   create(createProductOrderDto: CreateProductOrderDto): Promise<ProductOrder> {
//     const productProductOrders = createOrderDto.productProductOrders.map(
//       (p) => new ProductProductOrders(p),
//     );
//     return this.productOrderRepo.save(createProductOrderDto);
//   }
// }
