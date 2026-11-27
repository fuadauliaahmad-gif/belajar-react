import { useState } from "react";
import { Link } from "react-router";

function Setting() {
  const [notifikasiEmail, setNotifikasiEmail] = useState(true);
  const [buletinProduk, setBuletinProduk] = useState(false);
  const [bahasa, setBahasa] = useState("id");
  const [notifikasiSimpan, setNotifikasiSimpan] = useState(false);

  // Form ubah password
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState({ pesan: "", error: false });

  function handleSaveSettings(e) {
    e.preventDefault();
    setNotifikasiSimpan(true);
    setTimeout(() => setNotifikasiSimpan(false), 3000);
  }

  function handleUpdatePassword(e) {
    e.preventDefault();
    if (!passwordLama || !passwordBaru) {
      setPasswordStatus({ pesan: "Harap isi semua kolom kata sandi!", error: true });
      return;
    }
    if (passwordBaru.length < 6) {
      setPasswordStatus({ pesan: "Kata sandi baru minimal 6 karakter!", error: true });
      return;
    }
    if (passwordBaru !== konfirmasiPassword) {
      setPasswordStatus({ pesan: "Konfirmasi kata sandi tidak cocok!", error: true });
      return;
    }

    setPasswordStatus({ pesan: "Kata sandi berhasil diperbarui!", error: false });
    setPasswordLama("");
    setPasswordBaru("");
    setKonfirmasiPassword("");
    setTimeout(() => setPasswordStatus({ pesan: "", error: false }), 3000);
  }

  return (
    <div style={{ textAlign: "left", marginBottom: "30px" }}>
      {notifikasiSimpan && (
        <div className="alert-sukses" style={{ marginBottom: "20px" }}>
          ✅ <strong>Pengaturan Disimpan!</strong> Preferensi akun Anda telah berhasil diperbarui.
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {/* Kolom 1: Preferensi Umum & Notifikasi */}
        <div className="kartu-modern">
          <h3 style={{ color: "#f8fafc", margin: "0 0 6px", fontSize: "18px" }}>
            🔔 Preferensi & Tampilan
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 20px" }}>
            Atur bagaimana aplikasi berkomunikasi dan menampilkan konten kepada Anda.
          </p>

          <form onSubmit={handleSaveSettings} className="form-kontak">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", color: "#cbd5e1", fontSize: "14px" }}>
                <input
                  type="checkbox"
                  checked={notifikasiEmail}
                  onChange={(e) => setNotifikasiEmail(e.target.checked)}
                  style={{ marginTop: "4px" }}
                />
                <div>
                  <strong>Notifikasi Email</strong>
                  <p style={{ color: "#64748b", margin: "2px 0 0", fontSize: "12px" }}>
                    Terima email saat ada aktivitas penting atau pesan baru.
                  </p>
                </div>
              </label>

              <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", color: "#cbd5e1", fontSize: "14px" }}>
                <input
                  type="checkbox"
                  checked={buletinProduk}
                  onChange={(e) => setBuletinProduk(e.target.checked)}
                  style={{ marginTop: "4px" }}
                />
                <div>
                  <strong>Buletin & Tips Coding</strong>
                  <p style={{ color: "#64748b", margin: "2px 0 0", fontSize: "12px" }}>
                    Dapatkan update seputar materi React dan tips pemrograman.
                  </p>
                </div>
              </label>
            </div>

            <div className="form-group" style={{ marginTop: "14px" }}>
              <label htmlFor="bahasa">Bahasa Antarmuka</label>
              <select
                id="bahasa"
                value={bahasa}
                onChange={(e) => setBahasa(e.target.value)}
                style={{
                  padding: "10px 12px",
                  backgroundColor: "#171717",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  color: "#f8fafc",
                  fontSize: "14px"
                }}
              >
                <option value="id">🇮🇩 Bahasa Indonesia</option>
                <option value="en">🇬🇧 English</option>
              </select>
            </div>

            <button type="submit" className="tombol-utama" style={{ marginTop: "10px" }}>
              Simpan Preferensi 💾
            </button>
          </form>
        </div>

        {/* Kolom 2: Keamanan & Ganti Sandi */}
        <div className="kartu-modern">
          <h3 style={{ color: "#f8fafc", margin: "0 0 6px", fontSize: "18px" }}>
            🔒 Keamanan Akun
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 20px" }}>
            Perbarui kata sandi akun Anda secara berkala untuk menjaga keamanan.
          </p>

          {passwordStatus.pesan && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                marginBottom: "16px",
                fontSize: "13px",
                backgroundColor: passwordStatus.error ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 197, 94, 0.15)",
                color: passwordStatus.error ? "#fca5a5" : "#4ade80",
                border: passwordStatus.error ? "1px solid rgba(239, 68, 68, 0.3)" : "1px solid rgba(34, 197, 94, 0.3)"
              }}
            >
              {passwordStatus.pesan}
            </div>
          )}

          <form onSubmit={handleUpdatePassword} className="form-kontak">
            <div className="form-group">
              <label htmlFor="passwordLama">Kata Sandi Saat Ini</label>
              <input
                id="passwordLama"
                type="password"
                placeholder="••••••••"
                value={passwordLama}
                onChange={(e) => setPasswordLama(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordBaru">Kata Sandi Baru</label>
              <input
                id="passwordBaru"
                type="password"
                placeholder="Minimal 6 karakter"
                value={passwordBaru}
                onChange={(e) => setPasswordBaru(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="konfirmasiPassword">Konfirmasi Sandi Baru</label>
              <input
                id="konfirmasiPassword"
                type="password"
                placeholder="Ulangi sandi baru"
                value={konfirmasiPassword}
                onChange={(e) => setKonfirmasiPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="tombol-sekunder" style={{ marginTop: "6px" }}>
              Perbarui Kata Sandi 🔑
            </button>
          </form>
        </div>
      </div>

      {/* Navigasi Balik Cepat */}
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <Link to="/dashboard/profile" className="stat-link" style={{ fontSize: "14px" }}>
          &larr; Kembali ke Tampilan Profil
        </Link>
      </div>
    </div>
  );
}

export default Setting;
