import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PengeluaranModule } from './pengeluaran/pengeluaran.module';

@Module({
  imports: [PengeluaranModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
