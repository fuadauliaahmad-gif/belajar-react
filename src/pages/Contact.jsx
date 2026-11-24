import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: ""
  });
  const [statusKirim, setStatusKirim] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.nama || !formData.email || !formData.pesan) {
      alert("Harap lengkapi semua kolom wajib!");
      return;
    }

    // Simulasi kirim pesan
    setStatusKirim(true);
    setFormData({
      nama: "",
      email: "",
      subjek: "",
      pesan: ""
    });
  }

  return (
    <div className="halaman-wrapper">
      {/* Header Halaman */}
      <section className="halaman-header">
        <span className="badge-kategori">Hubungi Saya</span>
        <h1 className="halaman-judul">Mari Terhubung & Berdiskusi</h1>
        <p className="subjudul-halaman">
          Punya pertanyaan, tawaran kolaborasi, atau sekadar ingin menyapa? Silakan kirimkan pesan di bawah ini.
        </p>
      </section>

      <div className="kontak-container-grid">
        {/* Kolom Informasi Kontak Langsung */}
        <div className="kontak-info-wrapper">
          <div className="kartu-modern kontak-card-item">
            <span className="kontak-ikon">📧</span>
            <div>
              <h3>Email</h3>
              <p>fuadaulia.dev@gmail.com</p>
              <a href="mailto:fuadaulia.dev@gmail.com" className="kontak-link">
                Kirim Email Langsung &rarr;
              </a>
            </div>
          </div>

          <div className="kartu-modern kontak-card-item">
            <span className="kontak-ikon">🐙</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/fuadaulia</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="kontak-link"
              >
                Lihat Repository &rarr;
              </a>
            </div>
          </div>

          <div className="kartu-modern kontak-card-item">
            <span className="kontak-ikon">💼</span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/fuadaulia</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="kontak-link"
              >
                Kunjungi Profil &rarr;
              </a>
            </div>
          </div>

          <div className="kartu-modern kontak-card-item">
            <span className="kontak-ikon">📍</span>
            <div>
              <h3>Lokasi</h3>
              <p>Indonesia</p>
              <span className="kontak-subteks">Waktu Indonesia Barat (WIB)</span>
            </div>
          </div>
        </div>

        {/* Kolom Form Pesan Interaktif */}
        <div className="kartu-modern form-kontak-card">
          <h2>Kirim Pesan</h2>
          <p className="form-subjudul">
            Isi formulir di bawah ini untuk mengirimkan pesan secara langsung.
          </p>

          {statusKirim && (
            <div className="alert-sukses">
              🎉 <strong>Pesan Berhasil Terkirim!</strong> Terima kasih sudah menghubungi. Saya akan membalas secepatnya.
            </div>
          )}

          <form onSubmit={handleSubmit} className="form-kontak">
            <div className="form-group">
              <label htmlFor="nama">Nama Lengkap *</label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subjek">Subjek / Topik</label>
              <input
                type="text"
                id="subjek"
                name="subjek"
                placeholder="Diskusi Proyek / Saran"
                value={formData.subjek}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pesan">Pesan *</label>
              <textarea
                id="pesan"
                name="pesan"
                rows="4"
                placeholder="Tuliskan pesan Anda di sini..."
                value={formData.pesan}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="tombol-utama tombol-kirim">
              Kirim Pesan 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
