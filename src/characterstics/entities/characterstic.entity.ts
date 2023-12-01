import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ProductCardEntity } from 'src/product-cards/entities';
import { ProductCardCharacteristicsEntity } from './product-card-characteristics.entity';

@Table({
  tableName: 'Characteristic',
})
export class CharacteristicEntity extends Model {
  @Column
  name: string;

  @BelongsToMany(
    () => ProductCardEntity,
    () => ProductCardCharacteristicsEntity,
    'characteristicId',
    'productCardImtId',
  )
  productCards: ProductCardEntity[];
}
