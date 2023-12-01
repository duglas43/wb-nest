import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
export const ApiOkResponseWithError = () => {
  return applyDecorators(
    ApiOkResponse({
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
