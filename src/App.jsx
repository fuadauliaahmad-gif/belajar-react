
import { useState, useEffect } from "react";
import "./App.css";

function HobiItem({
  id,
  nama,
  kategori,
  ikon,
  terpilih,
  onPilih
}) {
  return (
    <li
      className={`item-hobi ${terpilih ? "terpilih" : ""} ${kategori.toLowerCase()}`}
      onClick={onPilih}
    >
      <span className="ikon-item">{ikon}</span>
      <strong>{nama}</strong> - {kategori}
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        FUAD-DEV.ID
      </a>

      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function App() {
  const [hobiTerpilih, setHobiTerpilih] = useState(null);
  const [nama, setNama] = useState("");

  const hobi = [
    {
      id: 1,
      nama: "Olahraga",
      ikon: "💪",
      kategori: "Fisik",
      deskripsi: "Menjaga kebugaran tubuh dan melatih kedisiplinan."
    },
    {
      id: 2,
      nama: "Bermain Game",
      ikon: "🎮",
      kategori: "Hiburan",
      deskripsi: "Mengisi waktu luang dan melatih strategi."
    },
    {
      id: 3,
      nama: "Berjualan",
      ikon: "🏪",
      kategori: "Bisnis",
      deskripsi: "Belajar menawarkan produk dan melayani pelanggan."
    },
    {
      id: 4,
      nama: "Belajar coding",
      ikon: "💻",
      kategori: "Teknologi",
      deskripsi: "Mempelajari cara membuat website dan aplikasi."
    }
  ];

  const hobiAktif = hobi.find(
    (item) => item.id === hobiTerpilih
  );

  useEffect(() => {
    document.title = nama ? `Profil ${nama}` : "Profil Saya";
  }, [nama]);

  return (
    <>
      <Navbar />

      <div className="profil-container" id="home">
        <h1 className="judul-profil">Profil Saya</h1>
        <h2 className="judul-hobi">Daftar Hobi Saya</h2>

        <ul className="daftar-hobi">
          {hobi.map((item) => (
            <HobiItem
              key={item.id}
              id={item.id}
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
              <div className="ikon-hobi">
                {hobiAktif.ikon}
              </div>

              <h3>Hobi Terpilih</h3>
              <p>{hobiAktif.nama}</p>
              <p>{hobiAktif.deskripsi}</p>
              <span>Kategori: {hobiAktif.kategori}</span>
            </>
          ) : (
            <p>Belum ada hobi yang dipilih.</p>
          )}
        </div>

        <div className="form-nama">
          <input
            className="input-nama"
            type="text"
            placeholder="Masukkan nama kamu"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />

          <button
            className="tombol-hapus"
            onClick={() => setNama("")}
          >
            Hapus Nama
          </button>
        </div>

        <p className={`pesan-sapaan ${nama ? "aktif" : ""}`}>
          {nama
            ? `Halo, ${nama}!`
            : "Silakan masukkan nama kamu."}
        </p>
      </div>
    </>
  );
}

export default App;
