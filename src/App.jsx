import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import HobiItem from "./components/HobiItem";
import Login from "./pages/login";
import FormPengguna from "./pages/form/FormPengguna";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Setting from "./pages/dashboard/Setting";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";


function App() {
  const [hobiTerpilih, setHobiTerpilih] = useState(null);
  const [nama, setNama] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

      <Routes>
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/form-pengguna"
          element={<FormPengguna />}
        />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route
          path="/dashboard-old"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route
          path="/"
          element={
            <div className="profil-container" id="home">
              <h1 className="judul-profil">Profil Saya</h1>
              <h2 className="judul-hobi">Daftar Hobi Saya</h2>

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
                <button className="tombol-hapus" onClick={() => setNama("")}>
                  Hapus Nama
                </button>
              </div>

              <p className={`pesan-sapaan ${nama ? "aktif" : ""}`}>
                {nama ? `Halo, ${nama}!` : "Silakan masukkan nama kamu."}
              </p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
