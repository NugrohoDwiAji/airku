import { z } from "zod";

const numberRegex = /^\d+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const donasiValidation = z.object({
  nama: z.string().min(3, 'Nama minimal 3 karakter'),
  whatsapp: z.string().min(10, "Isi Nomor WhatsApp Anda"),
  email: z.string().regex(emailRegex, "Format Email Salah"),
  donasi: z.string().min(2, "Mohon Masukan Jumlah Donasi"),
  doa: z.string().min(2, "Mohon Isi Do'a nya"),
});

export default donasiValidation;
