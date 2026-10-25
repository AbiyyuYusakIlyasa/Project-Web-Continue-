
function Ringkasan({ data }) {
  const total = data.reduce((jumlah, item) => jumlah + item.nominal, 0);

  return (
    <div className="row mb-4">
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h6>Total Pengeluaran</h6>
            <h3>Rp{total.toLocaleString("id-ID")}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h6>Jumlah Transaksi</h6>
            <h3>{data.length} transaksi</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ringkasan;
