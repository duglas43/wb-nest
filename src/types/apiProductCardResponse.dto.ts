import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ProductResponseDto } from './productResponse.dto';
export const ApiProductCardResponseDto = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(() => ProductResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
              error: {
                type: 'string',
              },
              errorText: {
                type: 'string',
              },
              additionalErrors: {
                type: 'string',
              },
            },
          },
        ],
      },
    }),
  );
};
