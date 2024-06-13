import { z } from "zod";

const nilaiRegex = new RegExp("^d+%$");

const laporValidation = z.object({
  nama: z.string().min(2, "Kolom Nama Harus Di isi"),
  whatsapp: z.string().min(10, "Isi Nomor WhatsApp Anda"),
  email: z.string().min(2, "Isi Alamat Email Anda"),
  namaJalan: z.string().min(2, "Masukan Nama Jalan"),
  provinsi: z.string().min(2, "Pilih Provinsi"),
  kota: z.string().min(2, "Pilih Kota"),
  kecamatan: z.string().min(2, "Pilih Kecamatan"),
  keterangan: z.string().min(2, "Silahkan Isi Laporan Anda"),
});

export default laporValidation;
