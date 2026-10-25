
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka);
}

function Dashboard({ pengeluaran }) {
  const total = pengeluaran.reduce(
    (jumlah, item) => jumlah + Number(item.jumlah),
    0
  );

  return (
    <main className="container py-4">
      <h2>Dashboard</h2>
      <p>Ringkasan pengeluaran mahasiswa.</p>

      <div className="row g-3 mt-2">
        <div className="col-12 col-md-6">
          <div className="card summary-card h-100">
            <div className="card-body">
              <h5>Total Pengeluaran</h5>
              <h3>{formatRupiah(total)}</h3>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card summary-card h-100">
            <div className="card-body">
              <h5>Jumlah Transaksi</h5>
              <h3>{pengeluaran.length} transaksi</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5>Informasi</h5>
          <p className="mb-0">
            Halaman ini digunakan untuk melihat ringkasan
            pengeluaran yang sudah dicatat.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
