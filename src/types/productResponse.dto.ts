import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto<T> {
  @ApiProperty()
  data: T[];
  @ApiProperty()
  error: string;

  @ApiProperty()
  errorText: string;

  @ApiProperty()
  additionalErrors: string;

  constructor(
    data: T[],
    {
      error,
      errorText,
      additionalErrors,
    }: { error: string; errorText: string; additionalErrors: string },
  ) {
    this.data = data;
    this.error = error;
    this.errorText = errorText;
    this.additionalErrors = additionalErrors;
  }
}
