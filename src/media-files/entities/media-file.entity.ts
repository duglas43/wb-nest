import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ProductCardEntity } from 'src/product-cards/entities';
import { ProductCardMediaFilesEntity } from './';
@Table({
  tableName: 'MediaFile',
})
export class MediaFileEntity extends Model {
  @Column
  originalName: string;

  @Column
  URL: string;

  @BelongsToMany(
    () => ProductCardEntity,
    () => ProductCardMediaFilesEntity,
    'mediaFileId',
    'productCardImtId',
  )
  productCards: ProductCardEntity[];
}
