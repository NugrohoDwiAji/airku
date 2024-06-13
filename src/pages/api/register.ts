import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"
import prisma from "@/custome-script/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const registerData = req.body;

  const passwordHash = await bcrypt.hash(registerData.password, 10);

  try {
    const result = await prisma.user.create({
      data: {
        email: registerData.email,
        username: registerData.nama,
        password: passwordHash,
      },
      select: {
        email: true,
        username: true,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat melakukan registrasi akun" });
  }
}
