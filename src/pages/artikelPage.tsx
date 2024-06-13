import CardArtikel from "@/components/card/CardArtikel";

import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


type BeritaType = {
  id: string;
  title: string;
  date: string;
  sumber: string;
  kategori: string;
  desc: string;
  image: string
};

export default function Artikel() {
  const currentPath = usePathname();
  const kategories = [
    { text: "Edukasi" },
    { text: "Berita" },
    { text: "Artikel" },
  ];

  const [beritaData, setBeritaData] = useState<BeritaType[]>([]);

  async function getData() {
    // showSnackbar(true, "Mengambil data ...");
    const response = await axios.get("http://localhost:3000/api/berita", {
      withCredentials: true,
    });
    setBeritaData(response.data);
    // showSnackbar(false, null);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full mb-[100px]">
      <div className="mt-[98px] w-full h-[277px] relative">
        <Image
          src="/assets/Hero-Artikel.png"
          alt="Hero-Artikel"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-[22px] ml-[560px] w-[371px] flex-col justify-start items-center gap-[15px] inline-flex">
        <div>
          <h1 className="text-neutral-600 text-4xl font-semibold">KATEGORI</h1>
        </div>
        <div className="flex gap-[22px] items-center py-2">
          {kategories.map((kategori, index) => (
            <Link
              key={index}
              className="text-gray-400 border-b-2 pb-3 border-greenBase hover:text-greenBase hover:border-greenBase transition-colors"
              href={kategori.text}
            >
              {kategori.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[1240px] mx-auto mt-[60px]">
        <div className="grid grid-cols-4 gap-[50px]">
          {beritaData.map((item, index) => (
            <CardArtikel
              key={index}
              src={item.image}
              time={item.date}
              title={item.title}
              desc={item.desc}
              link={`/details/${item.id}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-[50px]">
          <button
            type="button"
            className="flex items-center border-2 border-greenBase font-semibold rounded-lg py-[8px] px-[12px] text-[14px] text-greenBase hover:translate-x-1 transition-all"
          >
            Selengkapnya
            <div className="ml-[6px]">
              <GrLinkNext />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
