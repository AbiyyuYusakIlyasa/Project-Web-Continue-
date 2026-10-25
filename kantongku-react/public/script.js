
// Data awal pengeluaran KantongKu
let pengeluaran = [
    {
        nama: "Makan siang",
        kategori: "Makanan",
        nominal: 15000
    },
    {
        nama: "Ongkos kuliah",
        kategori: "Transportasi",
        nominal: 10000
    },
    {
        nama: "Kopi",
        kategori: "Jajan",
        nominal: 12000
    }
];

// Fungsi untuk menghitung total pengeluaran
function hitungTotal() {
    let total = 0;

    for (let i = 0; i < pengeluaran.length; i++) {
        total += pengeluaran[i].nominal;
    }

    return total;
}

// Fungsi untuk menampilkan data ke tabel
function tampilkanData() {
    const daftar = document.getElementById("daftarPengeluaran");
    const jumlah = document.getElementById("jumlahData");
    const total = document.getElementById("totalPengeluaran");
    const pesan = document.getElementById("pesanKosong");

    daftar.innerHTML = "";

    for (let i = 0; i < pengeluaran.length; i++) {
        const data = pengeluaran[i];
        const baris = document.createElement("tr");

        const kolomNo = document.createElement("td");
        kolomNo.textContent = i + 1;

        const kolomNama = document.createElement("td");
        kolomNama.textContent = data.nama;

        const kolomKategori = document.createElement("td");
        kolomKategori.textContent = data.kategori;

        const kolomNominal = document.createElement("td");
        kolomNominal.textContent = formatRupiah(data.nominal);

        const kolomAksi = document.createElement("td");
        const tombolHapus = document.createElement("button");

        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "btn btn-danger btn-sm hapus-data";
        tombolHapus.dataset.index = i;

        kolomAksi.appendChild(tombolHapus);

        baris.append(
            kolomNo,
            kolomNama,
            kolomKategori,
            kolomNominal,
            kolomAksi
        );

        daftar.appendChild(baris);
    }

    jumlah.textContent = pengeluaran.length;
    total.textContent = formatRupiah(hitungTotal());

    pesan.style.display = pengeluaran.length === 0 ? "block" : "none";
}

// Fungsi untuk mengubah angka menjadi format Rupiah
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Menambahkan data melalui form menggunakan JavaScript
document.getElementById("formPengeluaran").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const kategori = document.getElementById("kategori").value;
    const nominal = Number(document.getElementById("nominal").value);

    if (nama === "" || kategori === "" || nominal <= 0 || !Number.isFinite(nominal)) {
        alert("Silakan isi data dengan benar.");
        return;
    }

    pengeluaran.push({
        nama: nama,
        kategori: kategori,
        nominal: nominal
    });

    tampilkanData();
    this.reset();
});

// Event jQuery untuk menghapus data
$(document).on("click", ".hapus-data", function() {
    const index = Number($(this).data("index"));

    if (confirm("Yakin ingin menghapus pengeluaran ini?")) {
        pengeluaran.splice(index, 1);
        tampilkanData();
    }
});

// Event jQuery untuk menyembunyikan atau menampilkan ringkasan
$("#btnToggle").on("click", function() {
    $(".card").first().find(".card-body").slideToggle();
});

// Menampilkan data pertama kali saat halaman siap
$(document).ready(function() {
    tampilkanData();
});
