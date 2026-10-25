
import { Link } from 'react-router-dom';

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka);
}

function DaftarPengeluaran({ pengeluaran, hapusPengeluaran }) {
  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div>
          <h2>Daftar Pengeluaran</h2>
          <p className="mb-0">Data transaksi pengeluaran mahasiswa.</p>
        </div>

        <Link to="/tambah" className="btn btn-primary">
          Tambah Data
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>No.</th>
                  <th>Nama Pengeluaran</th>
                  <th>Kategori</th>
                  <th>Tanggal</th>
                  <th>Jumlah</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {pengeluaran.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Belum ada data pengeluaran.
                    </td>
                  </tr>
                ) : (
                  pengeluaran.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.kategori}</td>
                      <td>{item.tanggal}</td>
                      <td>{formatRupiah(item.jumlah)}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => hapusPengeluaran(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DaftarPengeluaran;
