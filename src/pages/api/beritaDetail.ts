import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custome-script/prisma";

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
    const { id } = req.query;

    const result = await prisma.berita.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!result) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  // if (req.method === "POST") {
  //   handlePostMethod(req, res);
  // }

  // // if (req.method === "PUT") {
  // //   handlePutMethod(req, res);
  // // }

  // if (req.method === "DELETE") {
  //   handleDeleteMethod(req, res);
  // }
}
