import { getConnection, Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from '../config';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productRepo: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        TypeOrmModule.forFeature([Product]),
      ],
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productRepo = module.get(getRepositoryToken(Product));
  });

  afterEach(async () => {
    await getConnection().synchronize(true);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`POST /products`, async () => {
    const productInput: CreateProductDto = {
      name: 'product1',
      description: '',
      picture: '',
      inventory: 0,
      price: 0,
      startSaleTime: undefined,
      endSaleTime: undefined,
    };
    await controller.create(productInput);

    const savedProduct = await productRepo.findOne();
    expect(savedProduct).toMatchObject(productInput);
  });
});
