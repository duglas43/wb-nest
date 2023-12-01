import { Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'ProductCardCharacteristics',
})
export class ProductCardCharacteristicsEntity extends Model {
  @Column
  value: string;
}
