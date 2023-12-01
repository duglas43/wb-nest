import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MediaFilesModule } from './media-files/media-files.module';
import { CharactersticsModule } from './characterstics/characterstics.module';
import { ProductCardsModule } from './product-cards/product-cards.module';
import {
  CharacteristicEntity,
  ProductCardCharacteristicsEntity,
} from './characterstics/entities';
import { ProductCardEntity } from './product-cards/entities';
import {
  MediaFileEntity,
  ProductCardMediaFilesEntity,
} from './media-files/entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DBHOST,
      port: Number(process.env.DBPORT),
      username: process.env.DBUSER,
      password: process.env.DBPASS || null,
      database: process.env.DBNAME,
      define: {
        freezeTableName: true,
      },
      models: [
        CharacteristicEntity,
        ProductCardCharacteristicsEntity,
        ProductCardEntity,
        MediaFileEntity,
        ProductCardMediaFilesEntity,
      ],
    }),
    MediaFilesModule,
    CharactersticsModule,
    ProductCardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
