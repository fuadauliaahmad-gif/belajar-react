import { NavLink, Outlet, useNavigate, useLocation, Link } from "react-router";

function Dashboard({ onLogout, user, hobiAktif }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    if (onLogout) {
      onLogout();
    }
    navigate("/login", { replace: true });
  }

  // Cek apakah sedang berada di root rute dashboard (/dashboard)
  const isDashboardRoot = location.pathname === "/dashboard";

  return (
    <div className="halaman-wrapper">
      {/* Header Dashboard Pengguna */}
      <section className="halaman-header" style={{ marginBottom: "28px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span className="badge-kategori">Panel Kontrol</span>
          <span style={{ fontSize: "13px", color: "#22c55e", fontWeight: "600" }}>
            ● Akun Aktif
          </span>
        </div>
        <h1 className="halaman-judul">
          Dashboard <span className="highlight-teks">{user?.namaLengkap || "Fuad Aulia"}</span>
        </h1>
        <p className="subjudul-halaman">
          Kelola profil pengguna, sesuaikan pengaturan akun, dan jelajahi integrasi rute website.
        </p>
      </section>

      {/* Navigasi Sub-Tab Dashboard */}
      <div
        className="kartu-modern"
        style={{
          padding: "10px 16px",
          marginBottom: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "tab-nav-btn aktif" : "tab-nav-btn"
            }
          >
            📊 Ringkasan
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "tab-nav-btn aktif" : "tab-nav-btn"
            }
          >
            👤 Profil Pengguna
          </NavLink>
          <NavLink
            to="/dashboard/setting"
            className={({ isActive }) =>
              isActive ? "tab-nav-btn aktif" : "tab-nav-btn"
            }
          >
            ⚙️ Pengaturan
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="tombol-hapus"
          style={{ padding: "8px 16px", fontSize: "13px" }}
          title="Keluar dari sesi saat ini"
        >
          Logout 🚪
        </button>
      </div>

      {/* Konten Bersarang (Outlet untuk Profile dan Setting) */}
      <Outlet />

      {/* Tampilan Overview / Ringkasan Khusus saat di rute /dashboard */}
      {isDashboardRoot && (
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Baris Kartu Statistik Cepat */}
          <div className="stats-grid">
            <div className="kartu-modern stat-card">
              <span className="stat-ikon">📦</span>
              <div>
                <span className="stat-label">Dynamic Route Demo</span>
                <h3 className="stat-nilai">ID: 25</h3>
                <Link to="/produk/25" className="stat-link">
                  Buka Detail Produk &rarr;
                </Link>
              </div>
            </div>

            <div className="kartu-modern stat-card">
              <span className="stat-ikon">📝</span>
              <div>
                <span className="stat-label">Validasi Form</span>
                <h3 className="stat-nilai">Zod + Hook Form</h3>
                <Link to="/form-pengguna" className="stat-link">
                  Buka Formulir Pengguna &rarr;
                </Link>
              </div>
            </div>

            <div className="kartu-modern stat-card">
              <span className="stat-ikon">🎯</span>
              <div>
                <span className="stat-label">Hobi Pilihan Anda</span>
                <h3 className="stat-nilai">
                  {hobiAktif ? `${hobiAktif.ikon} ${hobiAktif.nama}` : "Belum Dipilih"}
                </h3>
                <Link to="/" className="stat-link">
                  Pilih Hobi di Beranda &rarr;
                </Link>
              </div>
            </div>

            <div className="kartu-modern stat-card">
              <span className="stat-ikon">🛡️</span>
              <div>
                <span className="stat-label">Peran Akun</span>
                <h3 className="stat-nilai">{user?.role || "Developer"}</h3>
                <span style={{ fontSize: "12px", color: "#22c55e" }}>Terverifikasi</span>
              </div>
            </div>
          </div>

          {/* Kartu Integrasi Seluruh Rute Website */}
          <div className="kartu-modern" style={{ padding: "28px" }}>
            <h2 style={{ color: "#f8fafc", margin: "0 0 10px", fontSize: "20px" }}>
              🌐 Pintasan Rute & Halaman Terhubung
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 20px" }}>
              Dashboard ini terhubung langsung ke berbagai komponen halaman lain di aplikasi:
            </p>

            <div className="pintasan-grid">
              <Link to="/" className="kartu-pintasan">
                <span className="pintasan-ikon">🏠</span>
                <div>
                  <h4>Halaman Beranda</h4>
                  <p>Melihat daftar hobi, state sapaan nama, dan hero banner.</p>
                </div>
              </Link>

              <Link to="/about" className="kartu-pintasan">
                <span className="pintasan-ikon">ℹ️</span>
                <div>
                  <h4>Halaman About</h4>
                  <p>Informasi profil, keahlian teknologi, dan fokus belajar.</p>
                </div>
              </Link>

              <Link to="/contact" className="kartu-pintasan">
                <span className="pintasan-ikon">📬</span>
                <div>
                  <h4>Halaman Contact</h4>
                  <p>Saluran komunikasi langsung dan formulir kirim pesan.</p>
                </div>
              </Link>

              <Link to="/produk/100" className="kartu-pintasan">
                <span className="pintasan-ikon">🔍</span>
                <div>
                  <h4>Uji useParams()</h4>
                  <p>Akses cepat ke /produk/100 untuk menguji URL dinamis.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
