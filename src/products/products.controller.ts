import { Auth } from 'src/auth/auth.decorator';
import { EsoeApiResponseDto } from 'src/dto/esoe-api-response.dto';
import { UserType } from 'src/users/entities/user.entity';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@ApiTags('Product')
@Controller('products')
@ApiExtraModels(EsoeApiResponseDto)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Auth(UserType.賣家)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @Public()
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Auth(UserType.賣家)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Auth(UserType.賣家)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
