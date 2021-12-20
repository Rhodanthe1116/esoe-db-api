import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  description: string;
  picture: string;
  inventory: number;
  price: number;
  startSaleTime: Date;
  endSaleTime: Date;
}
