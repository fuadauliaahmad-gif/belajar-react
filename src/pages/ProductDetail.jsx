import { useParams, Link } from "react-router";

function ProductDetail() {
  const { id } = useParams();

  console.log("typeof id:", typeof id);
  console.log("id:", id);

  return (
    <div className="halaman-wrapper">
      <section className="halaman-header">
        <span className="badge-kategori">Dynamic Route</span>
        <h1 className="halaman-judul">Detail Produk</h1>
        <p className="subjudul-halaman">
          Halaman ini membaca parameter ID langsung dari URL menggunakan hook <code>useParams()</code>.
        </p>
      </section>

      <div
        className="kartu-modern"
        style={{
          maxWidth: "460px",
          margin: "0 auto",
          textAlign: "center",
          padding: "32px 24px"
        }}
      >
        <div style={{ fontSize: "52px", marginBottom: "12px" }}>📦</div>
        <h2 style={{ color: "#f8fafc", margin: "0 0 8px" }}>ID Produk Terdeteksi</h2>
        <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 16px" }}>
          Nilai parameter yang diekstrak dari URL:
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "10px 24px",
            background: "rgba(220, 38, 38, 0.2)",
            color: "#ef4444",
            fontSize: "26px",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "1px solid rgba(220, 38, 38, 0.4)",
            marginBottom: "20px"
          }}
        >
          {id}
        </div>

        <div style={{ borderTop: "1px solid #333", paddingTop: "18px", marginTop: "10px" }}>
          <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 14px" }}>
            Cek console browser (F12) untuk melihat hasil <code>console.log</code>.
          </p>
          <Link to="/" className="tombol-sekunder" style={{ fontSize: "14px", padding: "8px 18px" }}>
            &larr; Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;