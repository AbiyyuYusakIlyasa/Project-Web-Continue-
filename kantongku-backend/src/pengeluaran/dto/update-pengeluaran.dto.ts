import { PartialType } from '@nestjs/mapped-types';
import { CreatePengeluaranDto } from './create-pengeluaran.dto';

export class UpdatePengeluaranDto extends PartialType(CreatePengeluaranDto) {}
