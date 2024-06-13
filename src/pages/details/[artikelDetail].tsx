import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type BeritaType = {
  id: string;
  title: string;
  date: string;
  sumber: string;
  kategori: string;
  desc: string;
  image: string;
};

export default function ArtikelDetail() {
  const [beritaData, setBeritaData] = useState<BeritaType>();
  const router = useRouter();

  async function getData() {
    if (router.isReady) {
      const id = router.query.artikelDetail as string;
      try {
        const response = await axios.get(
          `http://localhost:3000/api/beritaDetail?id=${id}`
        );
        setBeritaData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }

  useEffect(() => {
    getData();
  }, [router]);

  return (
    <div className="container">
      {beritaData && (
        <>
          <div className="w-[1040px] h-[319px] mt-[198px] mx-auto rounded-xl relative">
            <Image
              src={beritaData.image}
              alt="gambar"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[457px] mx-auto flex items-center gap-[156px] mt-[31px]">
            <div className="flex justify-start items-center gap-[7px]">
              <Image
                src="/assets/tgl.png"
                alt="time"
                width={400}
                height={400}
                className="w-[24px] h-[25px]"
              />
              <p className="text-sm font-medium text-neutral-700">
                {beritaData.date}
              </p>
            </div>
            <div className="flex justify-start items-center gap-[7px]">
              <Image
                src="/assets/airku.png"
                alt="time"
                width={400}
                height={400}
                className="w-[24px] h-[25px] rounded-full"
              />
              <p className="text-sm font-medium text-neutral-700">
                {beritaData.sumber}
              </p>
            </div>
          </div>
          <div className="w-[1040px] mx-auto flex flex-col justify-start items-center gap-[43px]">
            <div className="w-[818px] mt-[30px] text-center text-greenBase text-4xl font-semibold">
              <p>{beritaData.title}</p>
            </div>
            <div>
              <p>{beritaData.desc}</p>
            </div>
          </div>
          {/* Additional sections as needed */}
          <div className="w-[1040px] mx-auto flex justify-between items-center mt-[25px]">
            <div className="flex text-center">
              <Link href="" className="flex text-center">
                <Image
                  src="/assets/arrow_back.svg"
                  alt="back"
                  width={100}
                  height={100}
                  className="w-[24px] h-[25px]"
                />
                <p className="text-indigo-700">Artikel Sebelumnya</p>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center">
                <p className="text-indigo-700">Artikel Selanjutnya</p>
                <Image
                  src="/assets/arrow_forward.svg"
                  alt="back"
                  width={100}
                  height={100}
                  className="w-[24px] h-[25px]"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
