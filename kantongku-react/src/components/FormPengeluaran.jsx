
import { useState } from "react";

function FormPengeluaran({ tambahData }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("Makanan");
  const [nominal, setNominal] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (nama.trim() === "" || Number(nominal) <= 0) {
      alert("Silakan isi nama dan nominal dengan benar.");
      return;
    }

    tambahData({
      id: Date.now(),
      nama: nama.trim(),
      kategori: kategori,
      nominal: Number(nominal),
    });

    setNama("");
    setKategori("Makanan");
    setNominal("");
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
              <option value="Kuliah">Keperluan Kuliah</option>
              <option value="Jajan">Jajan</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Nominal (Rp)</label>
            <input
              type="number"
              className="form-control"
              value={nominal}
              onChange={(event) => setNominal(event.target.value)}
              min="1"
              placeholder="Contoh: 15000"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPengeluaran;
