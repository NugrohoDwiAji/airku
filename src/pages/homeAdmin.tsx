import CardInfoAdmin from "@/components/card/CardInfoAdmin";
import Footer from "@/components/Footer";
import HeaderAdmin from "@/components/HeaderAdmin";
import axios from "axios";
import { useEffect, useState } from "react";


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
};

export default function HomeAdmin() {
  const [totalDonasi, setTotalDonasi] = useState(0);
  const [jumlahDonatur, setJumlahDonatur] = useState(0);
  const [jumlahBerita, setJumlahBerita] = useState(0);
  const [dataBerita, setDataBerita] = useState<BeritaType[]>([]);
  const [dataDonasi, setDataDonasi] = useState<DonasiType[]>([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:3000/api/donasi");
      setDataDonasi(response.data);
      const res = await axios.get("http://localhost:3000/api/berita");
      setDataBerita(res.data);
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
    setJumlahBerita(dataBerita.length);

    let calculatedTotalDonasi = 0;
    dataDonasi.forEach((item) => {
      const donasiValue = parseInt(item.donasi, 10) || 0; // Parse as integer, default to 0 if not a valid number
      calculatedTotalDonasi += donasiValue;
    });
    setTotalDonasi(calculatedTotalDonasi);

  }, [dataDonasi, dataBerita]);
  
  return (
    <div className="w-full mb-[100px]">
      <HeaderAdmin />
      <div
        className="mt-[93px] h-[277px] flex justify-center items-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('/assets/HeroAdminProfile.jpg')" }}
      >
        DASHBOARD
      </div>
      <div className="flex flex-wrap justify-between gap-10 m-auto w-[808px] mt-[108px]">
        <CardInfoAdmin
          src="/assets/people.png"
          angka={jumlahDonatur.toString()}
          title="Total Pendonasi"
          link="Cek Pendonasi"
        />
        <CardInfoAdmin
          src="/assets/wallet.png"
          angka={totalDonasi.toString()}
          title="Total Donasi"
          link="Cek Pendonasi"
        />
        <CardInfoAdmin
          src="/assets/wallet.png"
          angka={jumlahBerita.toString()}
          title="Tujuan Donasi"
          link="Cek Tujuan"
        />
        <CardInfoAdmin
          src="/assets/map.png"
          angka={jumlahBerita.toString()}
          title="Total Artikel Dan Berita"
          link="Cek Artikel"
        />
        {/* {menu.map((data, index) => (
          <div key={index} className="mt-[108px]">
            <CardInfoAdmin
              src={data.src}
              angka={data.angka}
              title={data.title}
              link={data.button}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}
