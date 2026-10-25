
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DaftarPengeluaran from './pages/DaftarPengeluaran';
import FormPengeluaran from './pages/FormPengeluaran';

const dataAwal = [
  {
    id: 1,
    nama: 'Makan siang',
    kategori: 'Makanan',
    tanggal: '2026-10-25',
    jumlah: 15000,
  },
  {
    id: 2,
    nama: 'Ongkos transportasi',
    kategori: 'Transportasi',
    tanggal: '2026-10-25',
    jumlah: 10000,
  },
  {
    id: 3,
    nama: 'Kopi',
    kategori: 'Jajan',
    tanggal: '2026-10-24',
    jumlah: 12000,
  },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          KantongKu
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Buka navigasi"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavbar">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Dashboard</Link>
            <Link className="nav-link" to="/pengeluaran">Daftar Pengeluaran</Link>
            <Link className="nav-link" to="/tambah">Tambah Pengeluaran</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [pengeluaran, setPengeluaran] = useState(dataAwal);

  function tambahPengeluaran(data) {
    setPengeluaran((sebelumnya) => [
      ...sebelumnya,
      { ...data, id: Date.now() },
    ]);
  }

  function hapusPengeluaran(id) {
    setPengeluaran((sebelumnya) =>
      sebelumnya.filter((item) => item.id !== id)
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard pengeluaran={pengeluaran} />}
        />
        <Route
          path="/pengeluaran"
          element={
            <DaftarPengeluaran
              pengeluaran={pengeluaran}
              hapusPengeluaran={hapusPengeluaran}
            />
          }
        />
        <Route
          path="/tambah"
          element={
            <FormPengeluaran
              tambahPengeluaran={tambahPengeluaran}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
