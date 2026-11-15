
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { PengeluaranService } from './pengeluaran.service';
import { CreatePengeluaranDto } from './dto/create-pengeluaran.dto';
import { UpdatePengeluaranDto } from './dto/update-pengeluaran.dto';

@Controller('pengeluaran')
export class PengeluaranController {
  constructor(
    private readonly pengeluaranService: PengeluaranService,
  ) {}

  @Post()
  create(@Body() dto: CreatePengeluaranDto) {
    return this.pengeluaranService.create(dto);
  }

  @Get()
  findAll() {
    return this.pengeluaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pengeluaranService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePengeluaranDto,
  ) {
    return this.pengeluaranService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pengeluaranService.remove(id);
  }
}
