import { Module } from '@nestjs/common';
import { ProductCardsService } from './product-cards.service';
import { ProductCardsController } from './product-cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCardEntity } from './entities/product-card.entity';
import { CharacteristicEntity } from 'src/characterstics/entities';

@Module({
  imports: [
    SequelizeModule.forFeature([ProductCardEntity, CharacteristicEntity]),
  ],
  controllers: [ProductCardsController],
  providers: [ProductCardsService],
})
export class ProductCardsModule {}
