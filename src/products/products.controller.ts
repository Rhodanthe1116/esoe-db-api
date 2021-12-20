import {
  EsoeCreatedResponse,
  EsoeResponse,
} from 'src/decorators/esoe-response.decorator';
import { EsoeApiResponseDto } from 'src/dto/esoe-api-response.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';

import {
  EsoeApiCreatedResponse,
  EsoeApiResponse,
} from '../decorators/esoe-api-response';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@ApiTags('Product')
@Controller('products')
@ApiExtraModels(EsoeApiResponseDto)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @EsoeCreatedResponse(Product)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @EsoeResponse([Product])
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @EsoeCreatedResponse(Product)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
