
function KartuPengeluaran({ item, hapusData }) {
  return (
    <tr>
      <td>{item.nama}</td>
      <td>{item.kategori}</td>
      <td>Rp{item.nominal.toLocaleString("id-ID")}</td>
      <td>
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
