import { z } from "zod";

const nilaiRegex = new RegExp("^d+%$");

const loginValidation = z.object({
  email: z.string().min(2, "Format Email Salah"),
  password: z.string().min(6, "Password Salah")
});

export default loginValidation;