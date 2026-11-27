import { useState } from "react";
import { Link } from "react-router";

function Profile({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [alertSukses, setAlertSukses] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: user?.namaLengkap || "Fuad Aulia",
    role: user?.role || "Frontend Developer",
    email: user?.email || "fuadaulia.dev@gmail.com",
    lokasi: user?.lokasi || "Indonesia",
    bio: user?.bio || "Pelajar yang bersemangat mendalami React dan ekosistem web modern."
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser((prev) => ({
        ...prev,
        ...formData
      }));
    }
    setIsEditing(false);
    setAlertSukses(true);
    setTimeout(() => setAlertSukses(false), 3000);
  }

  return (
    <div style={{ textAlign: "left", marginBottom: "30px" }}>
      {/* Alert Notifikasi Sukses */}
      {alertSukses && (
        <div className="alert-sukses" style={{ marginBottom: "20px" }}>
          🎉 <strong>Sukses!</strong> Data profil Anda telah berhasil diperbarui.
        </div>
      )}

      {/* Kartu Profil Utama */}
      <div className="kartu-modern profil-card-header" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div className="avatar-lingkaran" style={{ width: "70px", height: "70px", minWidth: "70px", fontSize: "38px" }}>
              {user?.avatar || "👨‍💻"}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h2 style={{ margin: "0", color: "#f8fafc", fontSize: "22px" }}>
                  {user?.namaLengkap || formData.namaLengkap}
                </h2>
                <span className="badge-kategori" style={{ padding: "3px 10px", fontSize: "11px" }}>
                  {user?.role || formData.role}
                </span>
              </div>
              <p style={{ color: "#94a3b8", margin: "4px 0 0", fontSize: "14px" }}>
                @{user?.username || "fuadaulia"} • 📍 {user?.lokasi || formData.lokasi}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="tombol-sekunder"
            style={{ padding: "8px 16px", fontSize: "13px" }}
          >
            {isEditing ? "Batal Edit ✕" : "Edit Profil ✏️"}
          </button>
        </div>

        <p style={{ color: "#cbd5e1", marginTop: "16px", fontSize: "15px", lineHeight: "1.6" }}>
          {user?.bio || formData.bio}
        </p>
      </div>

      {/* Form Edit Profil jika mode isEditing aktif */}
      {isEditing ? (
        <div className="kartu-modern" style={{ padding: "26px", marginBottom: "24px" }}>
          <h3 style={{ color: "#f8fafc", margin: "0 0 16px" }}>Perbarui Informasi Akun</h3>
          <form onSubmit={handleSave} className="form-kontak">
            <div className="form-group">
              <label htmlFor="namaLengkap">Nama Lengkap</label>
              <input
                id="namaLengkap"
                name="namaLengkap"
                type="text"
                value={formData.namaLengkap}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Peran / Jabatan</label>
              <input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lokasi">Lokasi</label>
              <input
                id="lokasi"
                name="lokasi"
                type="text"
                value={formData.lokasi}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio Singkat</label>
              <textarea
                id="bio"
                name="bio"
                rows="3"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <button type="submit" className="tombol-utama">
                Simpan Perubahan 💾
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="tombol-sekunder"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Rincian Informasi Profil */
        <div className="grid-dua-kolom" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div className="kartu-modern">
            <h3 style={{ color: "#f8fafc", margin: "0 0 16px", fontSize: "17px", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
              📋 Informasi Detail
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <div>
                <span style={{ color: "#64748b" }}>Username:</span>
                <p style={{ margin: "2px 0 0", color: "#f8fafc", fontWeight: "600" }}>{user?.username || "fuadaulia"}</p>
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Email:</span>
                <p style={{ margin: "2px 0 0", color: "#f8fafc", fontWeight: "600" }}>{user?.email || formData.email}</p>
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Terdaftar Sejak:</span>
                <p style={{ margin: "2px 0 0", color: "#f8fafc", fontWeight: "600" }}>{user?.tanggalBergabung || "November 2026"}</p>
              </div>
            </div>
          </div>

          <div className="kartu-modern">
            <h3 style={{ color: "#f8fafc", margin: "0 0 16px", fontSize: "17px", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
              🚀 Aksi & Integrasi
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", margin: "0 0 14px" }}>
              Ingin menguji formulir dengan validasi Zod atau mengubah setelan keamanan?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link to="/form-pengguna" className="tombol-sekunder" style={{ justifyContent: "center", fontSize: "13px" }}>
                Buka Form Pengguna &rarr;
              </Link>
              <Link to="/dashboard/setting" className="tombol-sekunder" style={{ justifyContent: "center", fontSize: "13px" }}>
                Buka Pengaturan Akun &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
