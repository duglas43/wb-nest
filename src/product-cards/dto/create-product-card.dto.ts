import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateProductCardDto {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
    },
    example: [
      {
        'Ширина упаковки': 25,
      },
      {
        'Высота упаковки': 5,
      },
      {
        'Длина упаковки': 30,
      },
      {
        'Дата регистрации сертификата/декларации': '23.12.2019',
      },
    ],
  })
  @IsArray()
  characteristics: Record<string, any>[];

  @ApiProperty()
  @IsString()
  vendorCode: string;
}
