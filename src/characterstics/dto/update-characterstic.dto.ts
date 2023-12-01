import { PartialType } from '@nestjs/swagger';
import { CreateCharactersticDto } from './create-characterstic.dto';

export class UpdateCharactersticDto extends PartialType(CreateCharactersticDto) {}
