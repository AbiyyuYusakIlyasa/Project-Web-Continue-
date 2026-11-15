import { useEffect, useState } from "react";
import Header from "./components/Header";
import Ringkasan from "./components/Ringkasan";
import FormPengeluaran from "./components/FormPengeluaran";
import FormEditPengeluaran from "./components/FormEditPengeluaran";
import DaftarPengeluaran from "./components/DaftarPengeluaran";
import TipsHemat from "./components/TipsHemat";

const API_URL = "http://localhost:3000/pengeluaran";

function App() {
  const [pengeluaran, setPengeluaran] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dataEdit, setDataEdit] = useState(null);

  async function muatData() {
    try {
      setError("");
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Gagal mengambil data pengeluaran.");
      }

      const data = await response.json();
      setPengeluaran(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    muatData();
  }, []);

  async function tambahData(dataBaru) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBaru),
    });

    if (!response.ok) {
      throw new Error("Gagal menambahkan pengeluaran.");
    }

    const hasil = await response.json();
    setPengeluaran((sebelumnya) => [...sebelumnya, hasil]);
  }

  async function hapusData(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus pengeluaran.");
      }

      setPengeluaran((sebelumnya) =>
        sebelumnya.filter((item) => item.id !== id),
      );
    } catch (err) {
      alert(err.message);
    }
  }

  function editData(item) {
    setDataEdit(item);
  }

  async function ubahData(id, dataBaru) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBaru),
    });

    if (!response.ok) {
      throw new Error("Gagal mengubah pengeluaran.");
    }

    const hasil = await response.json();

    setPengeluaran((sebelumnya) =>
      sebelumnya.map((item) => (item.id === id ? hasil : item)),
    );

    setDataEdit(null);
  }

  return (
    <>
      <Header />

      <main className="container py-4">
        <h3>Dashboard Pengeluaran</h3>
        <p>Catat dan pantau pengeluaran harian mahasiswa.</p>

        {loading && <p>Memuat data pengeluaran...</p>}

        {error && (
          <div className="alert alert-danger">
            {error}
            <button
              className="btn btn-sm btn-outline-danger ms-2"
              onClick={muatData}
            >
              Coba lagi
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <Ringkasan data={pengeluaran} />
            <TipsHemat />

            <FormPengeluaran tambahData={tambahData} />

            {dataEdit && (
              <FormEditPengeluaran
                item={dataEdit}
                ubahData={ubahData}
                batalEdit={() => setDataEdit(null)}
              />
            )}

            <DaftarPengeluaran
              data={pengeluaran}
              hapusData={hapusData}
              editData={editData}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
