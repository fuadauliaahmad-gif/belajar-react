
import { Routes, Route, Navigate, Outlet } from "react-router";

import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/login";
import FormPengguna from "../pages/form/FormPengguna";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import ProductDetail from "../pages/ProductDetail";

function AppRoutes({
  isAuthenticated,
  handleLogin,
  handleLogout,
  user,
  setUser,
  hobi,
  hobiTerpilih,
  setHobiTerpilih,
  hobiAktif,
  nama,
  setNama
}) {
  return (
    <Routes>
      {/* Rute Publik */}
      <Route
        path="/login"
        element={
          <Login
            onLogin={handleLogin}
            isAuthenticated={isAuthenticated}
          />
        }
      />

      {/* Rute yang membutuhkan autentikasi */}
      <Route
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Outlet />
          </ProtectedRoute>
        }
      >
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
          path="/dashboard-old"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              onLogout={handleLogout}
              user={user}
              hobiAktif={hobiAktif}
            />
          }
        >
          <Route
            path="profile"
            element={<Profile user={user} onUpdateUser={setUser} />}
          />

          <Route
            path="setting"
            element={<Setting user={user} onUpdateUser={setUser} />}
          />
        </Route>
      </Route>

      {/* Rute yang tidak ditemukan */}
      <Route
        path="*"
        element={
          <Navigate
            to={isAuthenticated ? "/" : "/login"}
            replace
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
