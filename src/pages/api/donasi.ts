// pages/api/laporan.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custome-script/prisma";

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataDonasi = req.body;
  
  try {
    const result = await prisma.donasi.create({
      data: {
        nama: dataDonasi.nama,
        whatsapp: dataDonasi.whatsapp,
        email: dataDonasi.email,
        donasi: dataDonasi.donasi,
        doa: dataDonasi.doa,
        metode: dataDonasi.paymentMethod
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menyimpan data Donasi" });
  }
}

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  // const token = req.cookies.token;

  // if (typeof token === "undefined") {
  //   return res.status(401).json({ message: "Token Not Found" });
  // }

  // jwt.verify(token, "bsa23456", (err) => {
  //   if (err) {
  //     return res.status(401).json({ message: "Token Invalid" });
  //   }
  // });

  try {
    const result = await prisma.donasi.findMany();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const projectId = req.query.id as string;
  try {
    const response = await prisma.donasi.delete({
      where: {
        id: projectId,
      },
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  if (req.method === "POST") {
    handlePostMethod(req, res);
  }

  // if (req.method === "PUT") {
  //   handlePutMethod(req, res);
  // }

  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }
}
