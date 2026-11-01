
import { useState, useEffect } from "react";

function TipsHemat() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function ambilTips() {
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));  
      
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data dari API.");
      }

      const data = await response.json();
      setTips(data);
    } catch (err) {
      setError("Tips tidak dapat dimuat. Periksa koneksi internet kamu.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ambilTips();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Informasi dan Tips Hemat</h5>
        <p className="text-muted">
          Contoh data dari API eksternal untuk latihan AJAX.
        </p>

        {loading && (
          <p>Memuat data tips...</p>
        )}

        {!loading && error && (
          <div>
            <p className="text-danger">{error}</p>
            <button
              className="btn btn-warning btn-sm"
              onClick={ambilTips}
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="row">
            {tips.map((tip) => (
              <div className="col-md-6 mb-3" key={tip.id}>
                <div className="border rounded p-3 h-100">
                  <h6>{tip.title}</h6>
                  <p className="mb-0">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TipsHemat;
