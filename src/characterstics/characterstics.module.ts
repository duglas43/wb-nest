import { Module } from '@nestjs/common';
import { CharactersticsService } from './characterstics.service';
import { CharactersticsController } from './characterstics.controller';
import { CharacteristicEntity } from './entities';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([CharacteristicEntity])],
  controllers: [CharactersticsController],
  providers: [CharactersticsService],
})
export class CharactersticsModule {}
