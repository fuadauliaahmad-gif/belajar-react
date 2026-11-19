
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
    <div>
      <h1>Form Data Pengguna</h1>

      {isSuccess && (
        <p role="status">
          Data pengguna berhasil disimpan!
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsSuccess(false)}
      >
        <div>
          <label>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            {...register("nama")}
          />
          {errors.nama && <p>{errors.nama.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Usia</label>
          <input
            type="number"
            placeholder="Masukkan usia"
            {...register("usia")}
          />
          {errors.usia && <p>{errors.usia.message}</p>}
        </div>

        <div>
          <label>Alamat</label>
          <textarea
            placeholder="Masukkan alamat"
            {...register("alamat")}
          />
          {errors.alamat && <p>{errors.alamat.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </button>

        <button
          type="button"
          onClick={handleReset}
          disabled={isSubmitting}
        >
          Reset Form
        </button>
      </form>
    </div>
  );
}

export default FormPengguna;
