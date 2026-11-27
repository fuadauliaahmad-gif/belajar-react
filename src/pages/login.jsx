import { useState } from "react";
import { useNavigate, Link } from "react-router";

function Login({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ingatSaya, setIngatSaya] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!username.trim()) {
      setErrorMsg("Username wajib diisi!");
      return;
    }

    if (!password) {
      setErrorMsg("Password wajib diisi!");
      return;
    }

    if (password.length < 4) {
      setErrorMsg("Password minimal 4 karakter!");
      return;
    }

    setErrorMsg("");

    // Panggil callback onLogin dari App.jsx
    if (onLogin) {
      onLogin({
        username: username.trim(),
        namaLengkap: username.trim(),
        email: `${username.trim().toLowerCase()}@example.com`
      });
    }

    // Arahkan ke beranda website setelah login berhasil
    navigate("/");
  }

  function isiAkunDemo() {
    setUsername("fuadaulia");
    setPassword("demo1234");
    setErrorMsg("");
  }

  // Tampilan jika pengguna sudah terautentikasi dan membuka /login
  if (isAuthenticated) {
    return (
      <div className="halaman-wrapper" style={{ paddingTop: "120px" }}>
        <div className="kartu-modern" style={{ maxWidth: "460px", margin: "0 auto", textAlign: "center", padding: "36px 24px" }}>
          <div style={{ fontSize: "50px", marginBottom: "14px" }}>✅</div>
          <h2 style={{ color: "#f8fafc", margin: "0 0 10px" }}>Anda Sudah Login</h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "24px" }}>
            Sesi akun Anda sedang aktif. Anda sudah dapat mengakses seluruh isi website.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link to="/" className="tombol-utama">
              Masuk ke Beranda 🏠
            </Link>
            <Link to="/dashboard" className="tombol-sekunder">
              Buka Dashboard 🚀
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="halaman-wrapper" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Header Portal Login */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "32px", fontWeight: "800", color: "#f8fafc", letterSpacing: "1px" }}>
          FUAD-DEV<span style={{ color: "#ef4444" }}>.ID</span>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "14px", margin: "6px 0 0" }}>
          Portal Akses Website & Portofolio
        </p>
      </div>

      <div className="kartu-modern" style={{ maxWidth: "440px", margin: "0 auto", padding: "32px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <span className="badge-kategori" style={{ marginBottom: "10px" }}>
            🔒 Area Terbatas
          </span>
          <h2 style={{ color: "#f8fafc", margin: "8px 0 4px", fontSize: "22px" }}>
            Silakan Login Terlebih Dahulu
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
            Masuk dengan akun Anda untuk melihat seluruh isi website ini.
          </p>
        </div>

        {errorMsg && (
          <div className="alert-error" style={{ marginBottom: "20px" }}>
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Quick Demo Helper */}
        <div
          style={{
            background: "rgba(59, 130, 246, 0.12)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "10px",
            padding: "12px 14px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ fontSize: "13px", color: "#93c5fd" }}>
            💡 <strong>Akun Demo:</strong> Isi otomatis kredensial.
          </div>
          <button
            type="button"
            onClick={isiAkunDemo}
            className="tombol-sekunder"
            style={{ padding: "6px 12px", fontSize: "12px" }}
          >
            Isi Demo
          </button>
        </div>

        <form onSubmit={handleLogin} className="form-kontak">
          <div className="form-group">
            <label htmlFor="username">Username / Email *</label>
            <input
              id="username"
              type="text"
              placeholder="Contoh: fuadaulia"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrorMsg("");
              }}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Kata Sandi *</label>
            <div style={{ position: "relative" }}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg("");
                }}
                style={{ paddingRight: "44px" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Sembunyikan password" : "Lihat password"}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "#94a3b8"
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "#cbd5e1" }}>
              <input
                type="checkbox"
                checked={ingatSaya}
                onChange={(e) => setIngatSaya(e.target.checked)}
              />
              Ingat saya
            </label>
            <span style={{ color: "#64748b" }}>Demo mode</span>
          </div>

          <button
            type="submit"
            className="tombol-utama tombol-kirim"
            style={{ marginTop: "10px" }}
          >
            Masuk & Lihat Website 🚀
          </button>
        </form>

        <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #333", textAlign: "center", fontSize: "13px", color: "#64748b" }}>
          🛡️ Hak Akses Terlindungi • Seluruh halaman membutuhkan login
        </div>
      </div>
    </div>
  );
}

export default Login;
