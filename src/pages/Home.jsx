import HobiItem from "../components/HobiItem";
import { Link } from "react-router";

function Home({
  hobi = [],
  hobiTerpilih,
  setHobiTerpilih,
  hobiAktif,
  nama,
  setNama,
}) {
  return (
    <div className="halaman-wrapper">
      {/* Hero Banner Section */}
      <section className="hero-section">
        <span className="badge-kategori">Selamat Datang 👋</span>
        <h1 className="hero-judul">
          Halo, Saya <span className="highlight-teks">Fuad Aulia</span>
        </h1>
        <p className="hero-deskripsi">
          Pelajar & Frontend Developer Enthusiast. Ini adalah portofolio sekaligus laboratorium belajar saya dalam membangun aplikasi web modern menggunakan React.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="tombol-utama">
            Tentang Saya 🚀
          </Link>
          <Link to="/contact" className="tombol-sekunder">
            Hubungi Saya 📬
          </Link>
        </div>
      </section>

      {/* Bagian Interaktif Profil & Hobi */}
      <section className="profil-container" id="home">
        <h2 className="judul-profil">Profil & Eksplorasi State</h2>
        <p className="subjudul-profil">Pilih salah satu hobi di bawah untuk melihat detailnya secara interaktif:</p>

        <h3 className="judul-hobi">Daftar Hobi Saya</h3>
        <ul className="daftar-hobi">
          {hobi.map((item) => (
            <HobiItem
              key={item.id}
              nama={item.nama}
              kategori={item.kategori}
              ikon={item.ikon}
              terpilih={hobiTerpilih === item.id}
              onPilih={() => setHobiTerpilih(item.id)}
            />
          ))}
        </ul>

        <div className="info-hobi">
          {hobiAktif ? (
            <>
              <div className="ikon-hobi">{hobiAktif.ikon}</div>
              <h3>Hobi Terpilih</h3>
              <p><strong>Nama:</strong> {hobiAktif.nama}</p>
              <p><strong>Deskripsi:</strong> {hobiAktif.deskripsi}</p>
              <span className="kategori-badge">Kategori: {hobiAktif.kategori}</span>
            </>
          ) : (
            <p className="info-kosong">💡 Klik salah satu hobi di atas untuk melihat detailnya.</p>
          )}
        </div>

        {/* Form Interaktif Sapaan Nama */}
        <div className="form-nama-wrapper">
          <label htmlFor="input-nama" className="label-input">
            Coba Fitur State Dua Arah:
          </label>
          <div className="form-nama">
            <input
              id="input-nama"
              className="input-nama"
              type="text"
              placeholder="Ketikkan nama kamu..."
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
            <button
              className="tombol-hapus"
              onClick={() => setNama("")}
              disabled={!nama}
              title="Kosongkan nama"
            >
              Hapus
            </button>
          </div>

          <p className={`pesan-sapaan ${nama ? "aktif" : ""}`}>
            {nama ? `Halo, ${nama}! Senang bertemu denganmu 🎉` : "Silakan ketikkan nama kamu di atas."}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
