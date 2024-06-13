import CardArtikel from "@/components/card/CardArtikel";
import CardInfo from "@/components/card/CardInfo";
import Image from "next/image";
import Link from "next/link";
import { SlCursor } from "react-icons/sl";
import { RiHandCoinFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { PiWarningOctagonFill } from "react-icons/pi";
import Artikel from "@/components/data/ArtikelHome.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

type DonasiType = {
  id: string;
  nama: string;
  whatsapp: string;
  email: string;
  donasi: string;
  doa: string;
  metode: string;
};

type BeritaType = {
  id: string;
  title: string;
  date: string;
  sumber: string,
  kategori: string,
  desc: string;
  image: string
};

export default function Home() {
  const [totalDonasi, setTotalDonasi] = useState(0);
  const [jumlahDonatur, setJumlahDonatur] = useState(0);
  const [dataDonasi, setDataDonasi] = useState<DonasiType[]>([]);
  const [beritaData, setBeritaData] = useState<BeritaType[]>([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:3000/api/donasi");
      setDataDonasi(response.data);

      const res = await axios.get("http://localhost:3000/api/berita");
      setBeritaData(res.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []); // Run once when the component mounts

  useEffect(() => {
    // Calculate totalDonasi when dataDonasi changes
    setJumlahDonatur(dataDonasi.length);
    let calculatedTotalDonasi = 0;
    dataDonasi.forEach((item) => {
      const donasiValue = parseInt(item.donasi, 10) || 0; // Parse as integer, default to 0 if not a valid number
      calculatedTotalDonasi += donasiValue;
    });
    setTotalDonasi(calculatedTotalDonasi);
  }, [dataDonasi]);

  useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-12 md:mt-20">
      {/* --1--- */}
      <div
        className="xl:h-[720px] w-full  h-[572px] lg:w-full md:w-full bg-[length:100%_330px] md:bg-[length:100%_513px] lg:bg-[length:100%_513px] xl:bg-[length:100%_672px] bg-no-repeat md:pl-8 flex justify-center "
        style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
      >
        <div className="h-[253px] md:w-full xl:w-[1460px] w-full px-3 md:px-0 pt-7 md:pt-0 flex justify-between md:mt-[60px]">
          <div className="xl:w-[700px] w-1/2 lg:w-[457px] md:w-80">
            <h1 className="text-white xl:text-6xl lg:text-4xl md:text-3xl font-bold ">
              BERBAGI AIR <br /> UNTUK MEMBANGUN <br /> MASA DEPAN
            </h1>
            <h2 className="mt-[25px] text-white text-[8px] xl:text-xl md:text-sm">
              Bersama-sama, kita dapat mengatasi krisis air global dan
              memberikan <br /> masa depan yang lebih baik bagi generasi
              mendatang. <br />
              Mari bergabung dan berdonasi sekarang!
            </h2>
            <div className="flex xl:gap-[9px] gap-2 mt-5 xl:mt-[48px] ">
              <Link
                href="/donasiPage"
                className="rounded-lg bg-teal-600 py-1 px-2 lg:px-4 lg:py-2 xl:py-[9.5px] xl:px-6 text-[8px] md:text-base lg:text-base xl:text-base text-white"
              >
                Donasi Sekarang{" "}
              </Link>
              <Link
                href={""}
                className=" flex items-center gap-2 border-2 border-teal-600 text-teal-600 rounded-lg py-1 px-2 xl:py-[9.5px] xl:px-6 text-[8px] xl:text-base"
              >
                Getting Started <SlCursor /> 
              </Link>
            </div>
            <div className="flex gap-[9px] mt-5 xl:mt-[49.5px] text-[8px] md:text-base text-white">
              <h1>Rp.{totalDonasi},-</h1>
              <h2>Donasi Terkumpul</h2>
            </div>
          </div>
          <div className="w-1/2 xl:w-[552px] lg:w-[461px] xl:mr-10 relative">
            <div className="w-28 h-40 md:h-52 md:w-40 lg:h-[240px] lg:w-[189px] xl:h-[417px] xl:w-[299px]  absolute z-10  top-0 right-0 md:right-12 lg:right-16 xl:right-0">
              <Image src="/assets/hero3.png" alt="" fill />
            </div>
            <div className="h-32 w-24 md:h-48 md:w-40 lg:h-[214px] lg:w-[180px] xl:h-[315px] xl:w-[284px] absolute z-30 top-0 right-[5.5rem] md:right-52 lg:right-60 xl:right-[268px] ">
              <Image src="/assets/hero2.png" alt="" fill />
            </div>
            <div className="h-24 w-20 md:h-36 md:w-32 lg:h-[170px] lg:w-[150px] xl:h-[257px] xl:w-[226px] absolute z-20 top-28 md:top-40 lg:top-48 right-16 md:right-36 lg:right-52 xl:top-[277px] xl:right-[215px]">
              <Image src="/assets/hero1.png" alt="" fill />
            </div>
          </div>
        </div>
      </div>
      {/* --2-- */}
      <div className="mt-[100px] xl:flex  xl:gap-[63px] xl:h-[438px] xl:w-[1240px] m-auto">
        <div
          className=" w-[580px] h-[435px] rounded-lg relative"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Image
            src="/assets/hero4.png"
            alt=""
            fill
            className="w-[580px] h-[435px]"
          />
        </div>
        <div className="max lg:w-[580px] "
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1 className="text-teal-600 flex font-bold">About us</h1>
          <h2 className="text-3xl font-bold mb-[16px] mt-[8px]">
            Hanya dengan Saling Membantu Satu Sama Lain Kita Dapat Membuat Dunia
            Menjadi Lebih Baik
          </h2>
          <p>
            Dengan setiap donasi yang Anda berikan, anda turut berperan dalam
            mengubah kehidupan ribuan orang dengan memberikan akses air bersih
            yang layak.
          </p>
          <div className="mt-[24px] flex flex-col gap-3">
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                {" "}
                <RiHandCoinFill />{" "}
              </div>
              <h1>
                Dengan setiap donasi yang Anda berikan, anda turut berperan
                dalam mengubah kehidupan ribuan orang dengan memberikan akses
                air bersih yang layak
              </h1>
            </div>
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                <GiWallet />
              </div>
              <h1>
                Setiap donasi yang diterima akan digunakan secara efisien dan
                transparan untuk membangun infrastruktur air yang berkelanjutan.
              </h1>
            </div>
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                <PiWarningOctagonFill />
              </div>
              <h1>
                Tersedia fitur pelaporan bagi anda yang ingin melaporkan
                permasalahan infrastruktur air yang terjadi di wilayah anda
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* --3-- */}
     <div
        className="h-[720px] bg-cover bg-center mt-[100px] flex flex-col justify-center items-center "
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <div className="flex justify-center gap-5 items-center">
          <CardInfo
            src={"/assets/people.png"}
            angka={jumlahDonatur.toString()}
            title={"Total Pendonasi"}
            data-aos="flip-up"
          />
          <CardInfo
            src={"/assets/wallet.png"}
            angka={`Rp.${totalDonasi},-`}
            title={"Total Donasi"}
          />
          <CardInfo
            src={"/assets/map.png"}
            angka={"8 Wilayah"}
            title={"Tujuan Donasi"}
          />
        </div>
        <h1 className="mt-12 mb-2 flex w-2/3 justify-start text-white">
          Total Donasi
        </h1>
        <div
          className="h-4 relative overflow-hidden w-2/3 rounded-full "
          data-aos="zoom-in-down"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div className="h-full w-[65%] bg-teal-600 absolute"></div>
        </div>
        <div className="h-6 relative overflow-hidden w-2/3 rounded-full ">
          <div className="h-full w-[67%] flex justify-end text-white">65%</div>
        </div>
      </div>
      {/* --4-- */}
      <div>
        <div className="w-[1240px] h-[628px] m-auto mt-[100px] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Bagaimana Cara Berdonasi di Web Kami ?
          </h1>
          <div className="gap-[40px] mt-[45px] flex max-xl:flex-col">
            <div
              className="w-[650px] h-[540px] relative"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Image src={"/assets/cara-berdonasi.jpg"} alt="" fill />
            </div>
            <div
              className="h-[550px] w-[550px] relative"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Image src={"/assets/hero5.png"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      {/* --5-- */}
      <div className="bg-[#23272e] mt-[100px] h-[600px] px-[100px] pb-[120px]">
        <h1 className="mt-[47px] text-white text-6xl font-bold">
          Artikel Dan Berita Terkini
        </h1>
        <div className=" flex justify-between items-center mt-[30px] max-xl:hidden">
          {beritaData.map((item, index) => (
            <CardArtikel
              src={item.image}
              title={item.title}
              desc={item.desc}
              time={item.date}
              key={index}
              link={`/details/${item.id}`}
            />
          ))}
        </div>
      </div>
      {/* --6-- */}
      <div
        className="h-[222px] relative flex justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <div className="h-[178px] w-[1024px] bg-teal-600 absolute -bottom-[55px] rounded-lg shadow-xl flex items-center justify-between px-[50px]">
          <h1 className="font-bold text-5xl text-gray-100 border-r-4 border-gray-400 pr-5">
            MORE PEOPLE <br /> MORE IMPACT
          </h1>
          <p className="">
            Kita tidak bisa membantu semua orang. <br /> tetapi setiap orang
            dapat membantu seseorang.
          </p>
          <div>
            <Link
              href="/donasiPage"
              className="px-[18.5px] py-[10px] bg-white text-teal-600 rounded-lg"
            >
              Berdonasi Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
