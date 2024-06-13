import { z } from "zod";

const nilaiRegex = new RegExp("^d+%$");

const registerValidation = z.object({
  nama: z.string().min(2, "Masukan Nama"),
  email: z.string().min(2, "Format Email Salah"),
  password: z.string().min(6, "Password Salah"),
  rePassword: z.string().min(6, "Password Tidak Cocok")
});

export default registerValidation;