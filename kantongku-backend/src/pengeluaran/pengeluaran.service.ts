import { Injectable, NotFoundException } from '@nestjs/common';
import { Pengeluaran } from './entities/pengeluaran.entity';
import { CreatePengeluaranDto } from './dto/create-pengeluaran.dto';
import { UpdatePengeluaranDto } from './dto/update-pengeluaran.dto';

@Injectable()
export class PengeluaranService {
  private pengeluaran: Pengeluaran[] = [];
  private nextId = 1;

  create(data: CreatePengeluaranDto): Pengeluaran {
    const dataBaru: Pengeluaran = {
      ...data,
      id: this.nextId++,
    };

    this.pengeluaran.push(dataBaru);
    return dataBaru;
  }

  findAll(): Pengeluaran[] {
    return this.pengeluaran;
  }

  findOne(id: number): Pengeluaran {
    const data = this.pengeluaran.find((item) => item.id === id);

    if (!data) {
      throw new NotFoundException(
        `Pengeluaran dengan ID ${id} tidak ditemukan`,
      );
    }

    return data;
  }

  update(id: number, data: UpdatePengeluaranDto): Pengeluaran {
    const dataLama = this.findOne(id);
    Object.assign(dataLama, data);
    return dataLama;
  }

  remove(id: number): Pengeluaran {
    const index = this.pengeluaran.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(
        `Pengeluaran dengan ID ${id} tidak ditemukan`,
      );
    }

    const dataDihapus = this.pengeluaran[index];
    this.pengeluaran.splice(index, 1);

    return dataDihapus;
  }
}
