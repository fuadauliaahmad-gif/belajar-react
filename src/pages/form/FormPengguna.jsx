
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Aturan validasi menggunakan Zod
const schemaForm = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.email("Format email tidak valid"),
  usia: z.coerce
    .number()
    .min(17, "Usia minimal 17 tahun")
    .max(100, "Usia maksimal 100 tahun"),
  alamat: z.string().min(5, "Alamat minimal 5 karakter"),
});

function FormPengguna() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      nama: "",
      email: "",
      usia: "",
      alamat: "",
    },
  });

  // Simulasi proses penyimpanan data
  async function onSubmit(data) {
    setIsSuccess(false);

    console.log("Data pengguna:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
  }

  // Mengatur ulang seluruh input
  function handleReset() {
    reset();
    setIsSuccess(false);
  }

  return (
    <div className="halaman-wrapper">
      <section className="halaman-header">
        <span className="badge-kategori">React Hook Form + Zod</span>
        <h1 className="halaman-judul">Form Data Pengguna</h1>
        <p className="subjudul-halaman">Contoh form validasi menggunakan React Hook Form dan Zod schema.</p>
      </section>

      <div className="kartu-modern" style={{ maxWidth: "520px", margin: "0 auto", padding: "30px" }}>
        {isSuccess && (
          <div className="alert-sukses" style={{ marginBottom: "20px" }}>
            ✅ <strong>Data pengguna berhasil disimpan!</strong>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setIsSuccess(false)}
          className="form-kontak"
        >
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama"
              {...register("nama")}
            />
            {errors.nama && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 0" }}>{errors.nama.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              {...register("email")}
            />
            {errors.email && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 0" }}>{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Usia</label>
            <input
              type="number"
              placeholder="Masukkan usia"
              {...register("usia")}
            />
            {errors.usia && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 0" }}>{errors.usia.message}</p>}
          </div>

          <div className="form-group">
            <label>Alamat</label>
            <textarea
              rows="3"
              placeholder="Masukkan alamat"
              {...register("alamat")}
            />
            {errors.alamat && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 0" }}>{errors.alamat.message}</p>}
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <button type="submit" className="tombol-utama" style={{ flex: 1 }} disabled={isSubmitting}>
              {isSubmitting ? "Menyimpan..." : "Simpan Data"}
            </button>

            <button
              type="button"
              className="tombol-sekunder"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPengguna;
