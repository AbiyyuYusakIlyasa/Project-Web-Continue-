# KantongKu — Aplikasi Manajemen Pengeluaran Mahasiswa

## Deskripsi

KantongKu merupakan aplikasi berbasis web yang dirancang untuk membantu mahasiswa mencatat, mengelola, dan memantau pengeluaran sehari-hari.

Aplikasi ini dikembangkan secara bertahap sebagai proyek perkuliahan Rekayasa Perangkat Lunak di Telkom University.

## Teknologi yang Digunakan

### Frontend

- HTML
- CSS
- JavaScript
- Bootstrap
- React
- Vite

### Backend

- Node.js
- NestJS
- TypeScript
- class-validator
- class-transformer

## Fitur Aplikasi

- Menampilkan daftar pengeluaran mahasiswa.
- Menambahkan data pengeluaran.
- Mengubah data pengeluaran.
- Menghapus data pengeluaran.
- Menampilkan ringkasan total pengeluaran.
- Memvalidasi data sebelum disimpan.
- Menghubungkan frontend dengan backend melalui REST API.

## Struktur Project

```text
Continue WEB Tugas/
│
├── kantongku-react/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── kantongku-backend/
│   ├── src/
│   │   ├── pengeluaran/
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── pengeluaran.controller.ts
│   │   │   ├── pengeluaran.service.ts
│   │   │   └── pengeluaran.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── SS/
│   ├── pengeluaran.http
│   └── package.json
│
└── README.md
```

## BAB 9 — NestJS Dasar dan Struktur MVC

Pada tahap BAB 9, aplikasi dikembangkan menggunakan NestJS sebagai backend dan React sebagai frontend. Backend menyediakan REST API untuk mengelola data pengeluaran.

### Struktur Data Pengeluaran

Data pengeluaran memiliki beberapa atribut:

- `id`: identitas pengeluaran.
- `nama`: nama pengeluaran.
- `kategori`: kategori pengeluaran.
- `tanggal`: tanggal transaksi.
- `jumlah`: nominal pengeluaran.
- `keterangan`: informasi tambahan.

### REST API

| Method | Endpoint           | Fungsi                        |
| ------ | ------------------ | ----------------------------- |
| GET    | `/pengeluaran`     | Mengambil semua data          |
| GET    | `/pengeluaran/:id` | Mengambil data berdasarkan ID |
| POST   | `/pengeluaran`     | Menambahkan data              |
| PATCH  | `/pengeluaran/:id` | Mengubah data                 |
| DELETE | `/pengeluaran/:id` | Menghapus data                |

### Validasi dan Penanganan Error

Validasi data diterapkan menggunakan `class-validator` dan `ValidationPipe`.

Beberapa aturan validasi:

- Nama harus berupa teks dan minimal dua karakter.
- Kategori harus sesuai pilihan yang tersedia.
- Tanggal harus menggunakan format tanggal yang valid.
- Jumlah harus berupa angka lebih dari nol.

Penanganan error menggunakan exception NestJS, termasuk `NotFoundException` ketika data dengan ID tertentu tidak ditemukan.

### Integrasi Frontend dan Backend

Frontend React terhubung ke backend NestJS menggunakan Fetch API.

Fitur tambah, tampil, edit, dan hapus data telah diuji melalui aplikasi.

### Pengujian API

Pengujian dilakukan menggunakan REST Client di Visual Studio Code.

Bukti pengujian tersedia pada folder `kantongku-backend/SS/`, meliputi:

1. POST — Tambah pengeluaran.
2. GET — Ambil semua pengeluaran.
3. GET — Ambil pengeluaran berdasarkan ID.
4. PATCH — Ubah pengeluaran.
5. DELETE — Hapus pengeluaran.
6. Error — Mencari ID yang tidak tersedia.
7. Error — Mengirim jumlah yang tidak valid.

## Cara Menjalankan Project

### 1. Menjalankan Backend

Buka terminal pada folder `kantongku-backend`, kemudian jalankan:

```bash
npm install
npm run start:dev
```

Backend berjalan pada:

```text
http://localhost:3000
```

### 2. Menjalankan Frontend

Buka terminal baru pada folder `kantongku-react`, kemudian jalankan:

```bash
npm install
npm run dev
```

Frontend berjalan pada:

```text
http://localhost:5173
```

Pastikan backend dan frontend berjalan bersamaan agar integrasi API dapat digunakan.

## Catatan

Backend pada tahap ini menggunakan penyimpanan data sementara di dalam memori (in-memory array). Data akan kembali kosong ketika server backend dimulai ulang.

## Pengembang

Proyek KantongKu dikembangkan sebagai bagian dari tugas perkuliahan Rekayasa Perangkat Lunak, Telkom University.
