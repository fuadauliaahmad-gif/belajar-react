import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import FormPengguna from "./pages/form/FormPengguna";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Setting from "./pages/dashboard/Setting";
import ProductDetail from "./pages/ProductDetail";
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

  const hobiAktif = hobi.find((item) => item.id === hobiTerpilih);

  useEffect(() => {
    document.title = nama ? `Profil ${nama}` : "Portofolio Fuad";
  }, [nama]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              hobi={hobi}
              hobiTerpilih={hobiTerpilih}
              setHobiTerpilih={setHobiTerpilih}
              hobiAktif={hobiAktif}
              nama={nama}
              setNama={setNama}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/form-pengguna" element={<FormPengguna />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
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
      </Routes>
    </>
  );
}

export default App;
