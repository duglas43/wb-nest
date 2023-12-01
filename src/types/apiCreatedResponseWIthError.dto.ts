import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
export const ApiCreatedResponseWithError = () => {
  return applyDecorators(
    ApiCreatedResponse({
      schema: {
        type: 'object',
        example: {
          data: null,
          error: '',
          errorText: '',
          additionalErrors: '',
        },
      },
    }),
  );
};
