Saya memilih Bootstrap untuk proyek KantongKu karena aplikasi ini membutuhkan tampilan dashboard, tabel pengeluaran, formulir input, dan navigasi yang responsif. Bootstrap menyediakan komponen siap pakai sehingga pengembangan lebih mudah dan cepat. Selain itu, Bootstrap membantu menyesuaikan tampilan aplikasi pada perangkat desktop maupun mobile tanpa harus menulis banyak CSS sendiri.
----------------------------------------------------

Bab7: data dari API ini merupakan contoh postingan, bukan tips hemat yang benar benar ditulis khusus untuk mahasiswa. jdul bagian dibuat relevan dengan KantongKu, tetapi kontennya tetap data asli dari API agar demonstrasi konsumsi API jelas.

Endpoint API: Saya menggunakan https://jsonplaceholder.typicode.com/posts?_limit=5 untuk mengambil lima data postingan contoh. JSONPlaceholder dipilih karena gratis, tidak membutuhkan API key, dan cocok untuk latihan konsumsi API pada React.

Loading dan error: Fungsi ambilTips() mengatur status loading sebelum mengambil data menggunakan fetch(). Jika respons gagal, kode melempar error dan menampilkan pesan kegagalan. Bagian finally mengakhiri status loading.

Render list: Data ditampilkan menggunakan tips.map() dengan key={tip.id} agar setiap elemen memiliki identitas yang unik.

Interaksi: Tombol Coba Lagi memanggil kembali fungsi ambilTips() untuk mengulang permintaan API.
----------------------------------------------------