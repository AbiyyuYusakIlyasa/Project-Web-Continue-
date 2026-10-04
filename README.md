# Aplikasi Manajemen Pengeluaran Mahasiswa

## Deskripsi

Aplikasi Manajemen Pengeluaran Mahasiswa merupakan aplikasi yang dirancang
untuk membantu mahasiswa mencatat dan mengelola pengeluaran sehari-hari.

Aplikasi ini dikembangkan secara bertahap sebagai proyek perkuliahan
Rekayasa Perangkat Lunak S1 Telkom University.

Pada tahap awal ini, aplikasi dibuat menggunakan HTML murni tanpa menggunakan
CSS maupun framework.

## Studi Kasus

Studi kasus yang digunakan adalah manajemen pengeluaran mahasiswa.

Pengguna dapat mencatat berbagai jenis pengeluaran, seperti:

- Makanan
- Transportasi
- Internet
- Kebutuhan kuliah
- Hiburan
- Lainnya

## Halaman Aplikasi

Project ini memiliki tiga halaman utama:

1. `index.html`
   - Menampilkan daftar pengeluaran.
   - Menggunakan tabel untuk menampilkan data.

2. `tambah.html`
   - Menampilkan form untuk menambahkan pengeluaran.
   - Menggunakan input, select, textarea, label, dan button.

3. `detail.html`
   - Menampilkan informasi detail dari sebuah pengeluaran.

## Struktur Project

```text
aplikasi-manajemen-pengeluaran-mahasiswa/
│
├── index.html
├── tambah.html
├── detail.html
│
├── assets/
│   └── images/
│       └── logo.svg
│
├── docs/
│   └── screenshots/
│       ├── halaman-utama.png
│       ├── halaman-tambah.png
│       └── halaman-detail.png
│
└── README.md


## Bab 3 - CSS

Pada tahap Bab 3, project dikembangkan menggunakan CSS native
untuk meningkatkan tampilan dan pengalaman pengguna.

### Penerapan CSS

Beberapa penerapan CSS yang digunakan:

- Font family, font size, dan font weight
- Styling navigasi
- Styling list
- Text alignment
- Warna background dan teks
- Styling tabel
- Styling form
- Styling button
- Styling kategori pengeluaran
- Responsive design menggunakan `@media`

### Responsive Design

Responsive design diterapkan menggunakan media query pada ukuran
layar maksimal 768px.

Pada tampilan desktop, navigasi ditampilkan secara horizontal.
Pada tampilan mobile, navigasi berubah menjadi vertikal agar
lebih mudah digunakan pada layar kecil.

### Screenshot Desktop

#### Halaman Utama

![Desktop Home](docs/screenshots/desktop-home.png)

#### Halaman Tambah

![Desktop Tambah](docs/screenshots/desktop-tambah.png)

#### Halaman Detail

![Desktop Detail](docs/screenshots/desktop-detail.png)

### Screenshot Mobile

#### Halaman Utama

![Mobile Home](docs/screenshots/mobile-home.png)

#### Halaman Tambah

![Mobile Tambah](docs/screenshots/mobile-tambah.png)

#### Halaman Detail

![Mobile Detail](docs/screenshots/mobile-detail.png)