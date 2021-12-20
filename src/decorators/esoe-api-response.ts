import { EsoeApiResponseDto } from 'src/dto/esoe-api-response.dto';

import { Type } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common/decorators';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';

export const EsoeApiResponse = <TModel extends Type<any> | Type<any>[]>(
  model: TModel,
) => {
  const data = Array.isArray(model)
    ? {
        type: 'array',
        items: {
          $ref: getSchemaPath(Array.isArray(model) ? model[0] : model),
        },
      }
    : {
        $ref: getSchemaPath(model),
      };

  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(EsoeApiResponseDto) },
          {
            properties: {
              data: data,
            },
          },
        ],
      },
    }),
  );
};

export const EsoeApiCreatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiCreatedResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(EsoeApiResponseDto) },
          {
            properties: {
              data: { $ref: getSchemaPath(model) },
            },
          },
          // {
          //   $ref: getSchemaPath(model),
          // },
        ],
      },
    }),
  );
};
