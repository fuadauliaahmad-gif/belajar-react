import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  // Ambil status login dari localStorage agar tidak hilang saat di-refresh
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("is_auth") === "true";
  });

  // Mengambil data pengguna
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("auth_user");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback jika parse json gagal
      }
    }
    return {
      username: "fuadaulia",
      namaLengkap: "Fuad Aulia",
      email: "fuadaulia.dev@gmail.com",
      role: "Frontend Developer",
      bio: "Pelajar yang bersemangat mendalami React, JavaScript modern, dan perancangan antarmuka responsif.",
      lokasi: "Indonesia",
      avatar: "👨‍💻",
      tanggalBergabung: "November 2026"
    };
  });

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

  const hobiAktif = hobi.find((item) => item.id === hobiTerpilih);

  useEffect(() => {
    document.title = nama ? `Profil ${nama}` : "Portofolio Fuad";
  }, [nama]);

  function handleLogin(dataLogin) {
    setIsAuthenticated(true);
    localStorage.setItem("is_auth", "true");

    if (dataLogin?.username) {
      setUser((prev) => {
        const updated = {
          ...prev,
          username: dataLogin.username,
          namaLengkap: dataLogin.namaLengkap || dataLogin.username,
          email: dataLogin.email || prev.email
        };
        localStorage.setItem("auth_user", JSON.stringify(updated));
        return updated;
      });
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem("is_auth");
  }

  return (
    <>
      {/* Navbar hanya ditampilkan jika pengguna sudah berhasil login */}
      {isAuthenticated && (
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          user={user}
        />
      )}

      {/* Seluruh pengaturan rute dipisahkan ke modul AppRoutes */}
      <AppRoutes
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
        setUser={setUser}
        hobi={hobi}
        hobiTerpilih={hobiTerpilih}
        setHobiTerpilih={setHobiTerpilih}
        hobiAktif={hobiAktif}
        nama={nama}
        setNama={setNama}
      />
    </>
  );
}

export default App;
