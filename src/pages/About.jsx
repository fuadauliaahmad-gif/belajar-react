import { Link } from "react-router";

function About() {
  const skills = [
    { nama: "React 19", level: "Dasar - Menengah", ikon: "⚛️" },
    { nama: "JavaScript (ES6+)", level: "Dasar - Menengah", ikon: "🟨" },
    { nama: "HTML5 & CSS3", level: "Menengah", ikon: "🎨" },
    { nama: "React Router", level: "Dasar", ikon: "🧭" },
    { nama: "Vite", level: "Dasar", ikon: "⚡" },
    { nama: "Git & GitHub", level: "Dasar", ikon: "🐙" },
  ];

  const fokusBelajar = [
    {
      judul: "Arsitektur Komponen",
      deskripsi: "Memahami pemisahan tanggung jawab komponen (modularisasi), props, dan pemanfaatan custom component yang reusable.",
      ikon: "🧩"
    },
    {
      judul: "Pengelolaan State & Event",
      deskripsi: "Menguasai useState, useEffect, one-way data flow, serta sinkronisasi input pengguna secara interaktif.",
      ikon: "🔄"
    },
    {
      judul: "Routing & Navigasi SPA",
      deskripsi: "Menerapkan dynamic routing, nested routes, protected routes, dan status aktif pada link navigasi.",
      ikon: "🚀"
    }
  ];

  return (
    <div className="halaman-wrapper">
      {/* Header Halaman */}
      <section className="halaman-header">
        <span className="badge-kategori">Tentang Saya</span>
        <h1 className="halaman-judul">Mengenal Fuad Aulia</h1>
        <p className="subjudul-halaman">
          Pelajar yang berfokus mendalami <strong>Frontend Web Development</strong> dengan teknologi modern.
        </p>
      </section>

      {/* Profil Singkat Card */}
      <section className="kartu-modern profil-singkat-card">
        <div className="avatar-lingkaran">👨‍💻</div>
        <div className="profil-singkat-info">
          <h2>Hai! Saya Fuad Aulia.</h2>
          <p>
            Saya sedang aktif mempelajari ekosistem pengembangan web modern, terutama React.js.
            Bagi saya, membuat website bukan sekadar menulis kode, tetapi juga tentang memberikan
            pengalaman visual yang menyenangkan dan mudah dipahami oleh pengguna.
          </p>
          <p>
            Proyek ini adalah wadah tempat saya bereksperimen dengan berbagai konsep React seperti 
            komponen, state, props, routing, dan validasi formulir.
          </p>
        </div>
      </section>

      {/* Keahlian & Teknologi */}
      <section className="bagian-konten">
        <h2 className="judul-bagian">Keahlian & Teknologi yang Dipelajari</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-ikon">{skill.ikon}</span>
              <div className="skill-info">
                <h3>{skill.nama}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fokus Pembelajaran */}
      <section className="bagian-konten">
        <h2 className="judul-bagian">Fokus Pembelajaran Saat Ini</h2>
        <div className="fokus-grid">
          {fokusBelajar.map((item, index) => (
            <div key={index} className="kartu-modern fokus-card">
              <span className="fokus-ikon">{item.ikon}</span>
              <h3>{item.judul}</h3>
              <p>{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ajakan Bertindak (CTA) */}
      <section className="kartu-modern cta-card">
        <h2>Ingin Berdiskusi atau Berkolaborasi?</h2>
        <p>Saya selalu terbuka untuk berdiskusi, belajar hal baru, atau menerima masukan seputar web development.</p>
        <Link to="/contact" className="tombol-utama">
          Kirim Pesan ke Saya 📬
        </Link>
      </section>
    </div>
  );
}

export default About;
