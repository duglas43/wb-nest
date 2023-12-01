import { Test, TestingModule } from '@nestjs/testing';
import { CharactersticsController } from './characterstics.controller';
import { CharactersticsService } from './characterstics.service';

describe('CharactersticsController', () => {
  let controller: CharactersticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersticsController],
      providers: [CharactersticsService],
    }).compile();

    controller = module.get<CharactersticsController>(CharactersticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
