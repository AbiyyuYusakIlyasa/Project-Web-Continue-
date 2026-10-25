
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormPengeluaran({ tambahPengeluaran }) {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('Makanan');
  const [tanggal, setTanggal] = useState('');
  const [jumlah, setJumlah] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!nama.trim() || !tanggal || Number(jumlah) <= 0) {
      alert('Silakan isi semua data dengan benar.');
      return;
    }

    tambahPengeluaran({
      nama: nama.trim(),
      kategori,
      tanggal,
      jumlah: Number(jumlah),
    });

    navigate('/pengeluaran');
  }

  return (
    <main className="container py-4">
      <h2>Tambah Pengeluaran</h2>
      <p>Isi form berikut untuk mencatat pengeluaran baru.</p>

      <div className="card mt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama Pengeluaran
              </label>
              <input
                id="nama"
                type="text"
                className="form-control"
                placeholder="Contoh: Makan siang"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="kategori" className="form-label">
                Kategori
              </label>
              <select
                id="kategori"
                className="form-select"
                value={kategori}
                onChange={(event) => setKategori(event.target.value)}
              >
                <option>Makanan</option>
                <option>Transportasi</option>
                <option>Jajan</option>
                <option>Kuliah</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="tanggal" className="form-label">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="date"
                className="form-control"
                value={tanggal}
                onChange={(event) => setTanggal(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="jumlah" className="form-label">
                Jumlah Pengeluaran (Rp)
              </label>
              <input
                id="jumlah"
                type="number"
                min="1"
                className="form-control"
                placeholder="Contoh: 15000"
                value={jumlah}
                onChange={(event) => setJumlah(event.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary me-2">
              Simpan
            </button>
            <Link to="/pengeluaran" className="btn btn-secondary">
              Kembali
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

export default FormPengeluaran;
