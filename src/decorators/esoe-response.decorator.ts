import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

import { applyDecorators, Type, UseInterceptors } from '@nestjs/common';

import { EsoeApiCreatedResponse, EsoeApiResponse } from './esoe-api-response';

export function EsoeResponse<TModel extends Type<any> | Type<any>[]>(
  model: TModel,
) {
  return applyDecorators(
    UseInterceptors(TransformInterceptor),
    EsoeApiResponse(model),
  );
}
export function EsoeCreatedResponse<TModel extends Type<any>>(model: TModel) {
  return applyDecorators(
    UseInterceptors(TransformInterceptor),
    EsoeApiCreatedResponse(model),
  );
}
