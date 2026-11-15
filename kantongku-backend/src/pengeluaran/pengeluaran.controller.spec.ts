import { Test, TestingModule } from '@nestjs/testing';
import { PengeluaranController } from './pengeluaran.controller';
import { PengeluaranService } from './pengeluaran.service';

describe('PengeluaranController', () => {
  let controller: PengeluaranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PengeluaranController],
      providers: [PengeluaranService],
    }).compile();

    controller = module.get<PengeluaranController>(PengeluaranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
