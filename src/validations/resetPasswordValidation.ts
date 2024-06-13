import { z } from "zod";

const nilaiRegex = new RegExp("^d+%$");

const resetPasswordValidation = z.object({
  email: z.string().min(2, "Format Email Salah"),
  resetPassword: z.string().min(6, "Password Salah"),
  rePassword: z.string().min(6, "Password Tidak Cocok"),
});

export default resetPasswordValidation;
