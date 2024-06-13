// pages/api/laporan.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custome-script/prisma";
import formidable, { Fields, Files } from "formidable";
import path from "path";

type laporanDatatype = {
  nama: string[];
  whatsapp: string[];
  email: string[];
  namaJalan: string[];
  provinsi: string[];
  kecamatan: string[];
  kota: string[];
  keterangan: string[];
};

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({
    uploadDir: path.join(process.cwd(), "public", "images", "laporan"),
    filename: (_, __, part, ___) => {
      return `${part.originalFilename}`;
    },
  });

  try {
    const { fields, files } = await new Promise<{
      fields: Fields;
      files: Files;
    }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ fields, files });
      });
    });

    // Dapatkan data formulir seperti nama dan email
    const {
      nama,
      whatsapp,
      email,
      namaJalan,
      provinsi,
      kecamatan,
      kota,
      keterangan,
    } = fields as laporanDatatype;

    // Buat path gambar
    const fileName = files?.file?.map((file) => file.originalFilename);
    const imagePath = `/images/laporan/${fileName}`;

    // simpan data ke database
    const saveData = await prisma.laporan.create({
      data: {
        nama,
        whatsapp,
        email,
        namaJalan,
        provinsi,
        kecamatan,
        kota,
        keterangan,
        imagePath: imagePath,
      },
    });

    if (saveData) {
      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method === "GET") {
  //   handleGetMethod(req, res);
  // }

  if (req.method === "POST") {
    handlePostMethod(req, res);
  }

  // if (req.method === "PUT") {
  //   handlePutMethod(req, res);
  // }

  // if (req.method === "DELETE") {
  //   handleDeleteMethod(req, res);
  // }
}
