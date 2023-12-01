import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import {
  CreateProductCardDto,
  UpdateProductCardDto,
  ProductCardDto,
} from './dto';
import { ProductCardEntity } from './entities';
import { CharacteristicEntity } from 'src/characterstics/entities';

import { InjectModel } from '@nestjs/sequelize';
import { ProductResponseDto, OkWithErrorsResponseDto } from 'src/types';

@Injectable()
export class ProductCardsService {
  constructor(
    @InjectModel(ProductCardEntity)
    private productCardEntity: typeof ProductCardEntity,
    @InjectModel(CharacteristicEntity)
    private characteristicEntity: typeof CharacteristicEntity,
  ) {}

  async create(createProductCardDto: CreateProductCardDto) {
    const { vendorCode, characteristics } = createProductCardDto;
    const candidate = await this.productCardEntity.findOne({
      where: { vendorCode },
    });
    if (candidate) throw new BadRequestException();
    await this.productCardEntity.create({
      vendorCode,
      nmId: Math.floor(Math.random() * 10001),
    });
    const createdProductCard = await this.productCardEntity.findOne({
      where: { vendorCode },
    });
    for (const characteristic of characteristics) {
      const findedCharacteristic = await this.characteristicEntity.findOne({
        where: { name: String(Object.keys(characteristic)[0]) },
      });
      if (!findedCharacteristic) throw new BadRequestException();
      await createdProductCard.$add('characteristic', findedCharacteristic.id, {
        through: {
          value: String(Object.values(characteristic)[0]),
        },
      });
    }
    return new OkWithErrorsResponseDto({});
  }

  async findOne(vendorCode: string) {
    const productCard = await this.productCardEntity.findOne({
      where: { vendorCode },
      include: ['characteristics', 'mediaFiles'],
    });
    if (!productCard) throw new NotFoundException();
    return new ProductResponseDto<ProductCardDto>(
      [new ProductCardDto(productCard.dataValues)],
      {
        additionalErrors: '',
        error: '',
        errorText: '',
      },
    );
  }

  async update(updateProductCardDto: UpdateProductCardDto) {
    const { imtId, object, nmId, vendorCode, characteristics } =
      updateProductCardDto;
    const productCard = await this.productCardEntity.findByPk(imtId);
    if (!productCard) throw new NotFoundException();

    await this.productCardEntity.update(
      {
        nmId,
        object,
        vendorCode,
      },
      { where: { imtId } },
    );

    const oldCharacteristics = await productCard.$get('characteristics');
    await productCard.$remove('characteristics', oldCharacteristics);
    for (const characteristic of characteristics) {
      const findedCharacteristic = await this.characteristicEntity.findOne({
        where: { name: Object.keys(characteristic)[0] },
      });
      if (!findedCharacteristic) throw new BadRequestException();
      await productCard.$add('characteristic', findedCharacteristic.id, {
        through: {
          value: String(Object.values(characteristic)[0]),
        },
      });
    }
    return new OkWithErrorsResponseDto({});
  }

  async remove(imtId: number) {
    const productCard = await this.productCardEntity.findByPk(imtId);
    if (!productCard) throw new NotFoundException();
    await productCard.destroy();
    return new OkWithErrorsResponseDto({});
  }
}
