// pages/api/laporan.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custome-script/prisma";
import formidable, { Fields, Files } from "formidable";
import path from "path";

type BeritaDatatype = {
  title: string[];
  date: string[];
  desc: string[];
  sumber: string[];
  kategori: string[];
};

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({
    uploadDir: path.join(process.cwd(), "public", "images", "berita"),
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
    const { date, title, sumber, kategori, desc } = fields as BeritaDatatype;

    console.log(sumber);
    console.log(kategori);
    

    // Buat path gambar
    const fileName = files?.image?.map((file) => file.originalFilename);
    const image = `/images/berita/${fileName}`;

    // simpan data ke database
    const saveData = await prisma.berita.create({
      data: {
        title,
        date,
        sumber,
        kategori,
        desc,
        image,
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
    const result = await prisma.berita.findMany();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const projectId = req.query.id as string;
  try {
    const response = await prisma.berita.delete({
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
