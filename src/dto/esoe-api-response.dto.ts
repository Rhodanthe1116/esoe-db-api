import { ApiProperty } from '@nestjs/swagger';

export class EsoeApiResponseDto<TData> {
  status: number;

  message: string;

  // data: TData;
}
