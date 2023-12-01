import { Module } from '@nestjs/common';
import { MediaFilesService } from './media-files.service';
import { MediaFilesController } from './media-files.controller';
import { MediaFileEntity } from './entities';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([MediaFileEntity])],
  controllers: [MediaFilesController],
  providers: [MediaFilesService],
})
export class MediaFilesModule {}
