import { useState } from "react";

function FormPengeluaran({ tambahData }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("Makanan");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (nama.trim() === "" || tanggal === "" || Number(jumlah) <= 0) {
      alert("Silakan isi semua data dengan benar.");
      return;
    }

    try {
      setLoading(true);

      await tambahData({
        nama: nama.trim(),
        kategori,
        tanggal,
        jumlah: Number(jumlah),
        keterangan: keterangan.trim() || undefined,
      });

      setNama("");
      setKategori("Makanan");
      setTanggal("");
      setJumlah("");
      setKeterangan("");

      alert("Pengeluaran berhasil ditambahkan.");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Tambah Pengeluaran</h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Pengeluaran</label>
            <input
              type="text"
              className="form-control"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
              placeholder="Contoh: Makan siang"
              minLength="2"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori</label>
            <select
              className="form-select"
              value={kategori}
              onChange={(event) => setKategori(event.target.value)}
            >
              <option value="Makanan">Makanan</option>
              <option value="Transportasi">Transportasi</option>
              <option value="Kuliah">Kuliah</option>
              <option value="Jajan">Jajan</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              className="form-control"
              value={tanggal}
              onChange={(event) => setTanggal(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Jumlah (Rp)</label>
            <input
              type="number"
              className="form-control"
              value={jumlah}
              onChange={(event) => setJumlah(event.target.value)}
              min="1"
              placeholder="Contoh: 15000"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Keterangan (Opsional)</label>
            <textarea
              className="form-control"
              value={keterangan}
              onChange={(event) => setKeterangan(event.target.value)}
              placeholder="Tambahkan keterangan..."
              rows="2"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Menyimpan..." : "Tambah"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPengeluaran;
