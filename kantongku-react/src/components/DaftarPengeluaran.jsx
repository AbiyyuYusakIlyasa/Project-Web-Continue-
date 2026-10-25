
import KartuPengeluaran from "./KartuPengeluaran";

function DaftarPengeluaran({ data, hapusData }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Daftar Pengeluaran</h5>

        {data.length === 0 ? (
          <p>Belum ada data pengeluaran.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Nominal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <KartuPengeluaran
                    key={item.id}
                    item={item}
                    hapusData={hapusData}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DaftarPengeluaran;
