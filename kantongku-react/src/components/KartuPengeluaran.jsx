function KartuPengeluaran({ item, hapusData, editData }) {
  return (
    <tr>
      <td>{item.nama}</td>
      <td>{item.kategori}</td>
      <td>Rp{Number(item.jumlah).toLocaleString("id-ID")}</td>
      <td>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => editData(item)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => hapusData(item.id)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}

export default KartuPengeluaran;
