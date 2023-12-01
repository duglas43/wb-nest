import { ApiProperty } from '@nestjs/swagger';

export class ProductCardDto {
  @ApiProperty()
  imtId: number;

  @ApiProperty()
  object: string;

  @ApiProperty()
  nmId: number;

  @ApiProperty()
  vendorCode: string;

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
  characteristics: any[];

  @ApiProperty()
  mediaFiles: string[];

  @ApiProperty()
  isProhibitet: boolean;

  constructor(productCard: Partial<ProductCardDto>) {
    this.imtId = productCard.imtId;
    this.object = productCard.object;
    this.nmId = productCard.nmId;
    this.vendorCode = productCard.vendorCode;
    this.characteristics = productCard.characteristics.map((item: any) => ({
      [item.name]: item.ProductCardCharacteristicsEntity.value,
    }));
    this.mediaFiles = productCard.mediaFiles.map((item: any) => item.URL);
    this.isProhibitet = productCard.isProhibitet;
  }
}
