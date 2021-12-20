import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepo.save(createProductDto);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productRepo.save({ id, ...updateProductDto });
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
