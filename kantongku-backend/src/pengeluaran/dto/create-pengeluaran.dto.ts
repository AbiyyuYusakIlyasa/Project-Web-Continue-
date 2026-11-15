import {
  IsString,
  IsIn,
  IsDateString,
  IsNumber,
  Min,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreatePengeluaranDto {
  @IsString()
  @MinLength(2)
  nama: string;

  @IsString()
  @IsIn(['Makanan', 'Transportasi', 'Jajan', 'Kuliah', 'Lainnya'])
  kategori: string;

  @IsDateString()
  tanggal: string;

  @IsNumber()
  @Min(1)
  jumlah: number;

  @IsOptional()
  @IsString()
  keterangan?: string;
}
