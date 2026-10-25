
import { useState } from "react";
import Header from "./components/Header";
import Ringkasan from "./components/Ringkasan";
import FormPengeluaran from "./components/FormPengeluaran";
import DaftarPengeluaran from "./components/DaftarPengeluaran";

function App() {
  const [pengeluaran, setPengeluaran] = useState([
    {
      id: 1,
      nama: "Makan siang",
      kategori: "Makanan",
      nominal: 15000,
    },
    {
      id: 2,
      nama: "Ongkos kuliah",
      kategori: "Transportasi",
      nominal: 10000,
    },
    {
      id: 3,
      nama: "Fotokopi materi",
      kategori: "Kuliah",
      nominal: 5000,
    },
  ]);

  function tambahData(dataBaru) {
    setPengeluaran((dataSebelumnya) => [
      ...dataSebelumnya,
      dataBaru,
    ]);
  }

  function hapusData(id) {
    setPengeluaran((dataSebelumnya) =>
      dataSebelumnya.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <Header />

      <main className="container py-4">
        <h3>Dashboard Pengeluaran</h3>
        <p>Catat dan pantau pengeluaran harian mahasiswa.</p>

        <Ringkasan data={pengeluaran} />

        <FormPengeluaran tambahData={tambahData} />

        <DaftarPengeluaran
          data={pengeluaran}
          hapusData={hapusData}
        />
      </main>
    </>
  );
}

export default App;
