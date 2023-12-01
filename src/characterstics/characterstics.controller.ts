import { Controller } from '@nestjs/common';
import { CharactersticsService } from './characterstics.service';
@Controller('characterstics')
export class CharactersticsController {
  constructor(private readonly charactersticsService: CharactersticsService) {}
}
