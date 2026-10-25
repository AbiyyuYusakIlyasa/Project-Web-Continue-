
import { useState } from 'react';

function App() {
  const [pengeluaran, setPengeluaran] = useState([
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
  ]);

  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('Makanan');
  const [tanggal, setTanggal] = useState('2026-10-25');
  const [jumlah, setJumlah] = useState('');

  const totalPengeluaran = pengeluaran.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  function tambahPengeluaran(e) {
    e.preventDefault();

    if (!nama.trim() || !tanggal || Number(jumlah) <= 0) {
      alert('Silakan isi semua data dengan benar.');
      return;
    }

    const dataBaru = {
      id: Date.now(),
      nama: nama,
      kategori: kategori,
      tanggal: tanggal,
      jumlah: Number(jumlah),
    };

    setPengeluaran([...pengeluaran, dataBaru]);
    setNama('');
    setKategori('Makanan');
    setTanggal('2026-10-25');
    setJumlah('');
  }

  function hapusPengeluaran(id) {
    setPengeluaran(pengeluaran.filter((item) => item.id !== id));
  }

  function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  }

  return (
    <div className="app-background min-vh-100">
      <nav className="navbar navbar-dark navbar-custom">
        <div className="container">
          <span className="navbar-brand fw-bold">KantongKu</span>
          <span className="text-white small">
            Catatan Pengeluaran Mahasiswa
          </span>
        </div>
      </nav>

      <main className="container py-4">
        <div className="mb-4">
          <h2 className="fw-bold">Pengeluaran Saya</h2>
          <p className="text-secondary">
            Catat dan pantau pengeluaran sehari-hari.
          </p>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="card summary-card h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Total Pengeluaran</p>
                <h3 className="fw-bold mb-0">
                  {formatRupiah(totalPengeluaran)}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card summary-card h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Jumlah Transaksi</p>
                <h3 className="fw-bold mb-0">
                  {pengeluaran.length} transaksi
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-white py-3">
            <h5 className="mb-0">Tambah Pengeluaran</h5>
          </div>

          <div className="card-body">
            <form onSubmit={tambahPengeluaran}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nama Pengeluaran</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contoh: Makan siang"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Kategori</label>
                  <select
                    className="form-select"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                  >
                    <option>Makanan</option>
                    <option>Transportasi</option>
                    <option>Jajan</option>
                    <option>Akademik</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Jumlah (Rp)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contoh: 15000"
                    min="1"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Tambah Data
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-white py-3">
            <h5 className="mb-0">Daftar Pengeluaran</h5>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Tanggal</th>
                  <th>Jumlah</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {pengeluaran.length > 0 ? (
                  pengeluaran.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.kategori}</td>
                      <td>{item.tanggal}</td>
                      <td>{formatRupiah(item.jumlah)}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => hapusPengeluaran(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      Belum ada data pengeluaran.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-secondary small mt-4 text-center">
          KantongKu — Aplikasi Manajemen Pengeluaran Mahasiswa
        </p>
      </main>
    </div>
  );
}

export default App;
