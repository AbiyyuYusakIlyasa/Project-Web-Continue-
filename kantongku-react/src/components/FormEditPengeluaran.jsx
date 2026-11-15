import { useState } from "react";

function FormEditPengeluaran({ item, ubahData, batalEdit }) {
  const [nama, setNama] = useState(item.nama);
  const [kategori, setKategori] = useState(item.kategori);
  const [tanggal, setTanggal] = useState(item.tanggal);
  const [jumlah, setJumlah] = useState(String(item.jumlah));
  const [keterangan, setKeterangan] = useState(item.keterangan || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (nama.trim() === "" || tanggal === "" || Number(jumlah) <= 0) {
      alert("Silakan isi semua data dengan benar.");
      return;
    }

    try {
      setLoading(true);

      await ubahData(item.id, {
        nama: nama.trim(),
        kategori,
        tanggal,
        jumlah: Number(jumlah),
        keterangan: keterangan.trim() || undefined,
      });

      alert("Pengeluaran berhasil diubah.");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card mb-4 border-warning">
      <div className="card-body">
        <h5 className="card-title">Edit Pengeluaran</h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Pengeluaran</label>
            <input
              type="text"
              className="form-control"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori</label>
            <select
              className="form-select"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="Makanan">Makanan</option>
              <option value="Transportasi">Transportasi</option>
              <option value="Jajan">Jajan</option>
              <option value="Kuliah">Kuliah</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              className="form-control"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Jumlah (Rp)</label>
            <input
              type="number"
              className="form-control"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              min="1"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Keterangan</label>
            <textarea
              className="form-control"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning me-2"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={batalEdit}
            disabled={loading}
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormEditPengeluaran;
