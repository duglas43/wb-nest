import {
  Column,
  Model,
  Table,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProductCardCharacteristicsEntity } from 'src/characterstics/entities';
import { CharacteristicEntity } from 'src/characterstics/entities';
import { MediaFileEntity } from 'src/media-files/entities';
import { ProductCardMediaFilesEntity } from 'src/media-files/entities';

@Table({
  tableName: 'ProductCard',
})
export class ProductCardEntity extends Model {
  @PrimaryKey
  @Column
  imtId: number;

  @Column
  object: string;

  @Column
  nmId: number;

  @Column
  vendorCode: string;

  @Column
  isProhibitet: boolean;

  @BelongsToMany(
    () => CharacteristicEntity,
    () => ProductCardCharacteristicsEntity,
    'productCardImtId',
    'characteristicId',
  )
  characteristics: CharacteristicEntity[];

  @BelongsToMany(
    () => MediaFileEntity,
    () => ProductCardMediaFilesEntity,
    'productCardImtId',
    'mediaFileId',
  )
  mediaFiles: MediaFileEntity[];
}
