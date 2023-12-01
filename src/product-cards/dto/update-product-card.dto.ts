import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsArray } from 'class-validator';

export class UpdateProductCardDto {
  @ApiProperty()
  @IsInt()
  imtId: number;

  @ApiPropertyOptional()
  @IsString()
  object: string;

  @ApiPropertyOptional()
  @IsInt()
  nmId: number;

  @ApiPropertyOptional()
  @IsString()
  vendorCode: string;

  @ApiPropertyOptional({
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
}
