import { Test, TestingModule } from '@nestjs/testing';
import { CharactersticsService } from './characterstics.service';

describe('CharactersticsService', () => {
  let service: CharactersticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersticsService],
    }).compile();

    service = module.get<CharactersticsService>(CharactersticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
