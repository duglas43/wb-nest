import { Injectable } from '@nestjs/common';
import { CreateCharactersticDto } from './dto/create-characterstic.dto';
import { UpdateCharactersticDto } from './dto/update-characterstic.dto';

@Injectable()
export class CharactersticsService {
  create(createCharactersticDto: CreateCharactersticDto) {
    return 'This action adds a new characterstic';
  }

  findAll() {
    return `This action returns all characterstics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterstic`;
  }

  update(id: number, updateCharactersticDto: UpdateCharactersticDto) {
    return `This action updates a #${id} characterstic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterstic`;
  }
}
