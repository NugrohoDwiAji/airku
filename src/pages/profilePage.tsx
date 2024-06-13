import CardName from "@/components/card/CardName";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import TeamData from "@/components/data/TeamData.json";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <div className="w-full mb-[100px]">
      <div className="mt-[98px] h-[277px] relative">
        <Image
          src="/assets/Hero-profile.png"
          alt="Hero-Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-[63px] justify-between mt-[94px] px-[100px]">
        <div className="flex-1">
          <Image
            src="/assets/about-us.png"
            alt="hero"
            width={580}
            height={580}
            className="w-[580px] h-[580px]"
          />
        </div>
        <div className="flex-1 ">
          <div className="mb-2">
            <h2 className=" text-greenBase text-[40px] font-bold">Visi</h2>
            <p className="mt-2 text-neutral-800">
              Menjadi sumber inspirasi dan kekuatan kolaboratif untuk mengatasi
              krisis air bersih global dengan memobilisasi donasi, membangun
              kesadaran, dan memungkinkan tindakan nyata menuju akses air bersih
              yang berkelanjutan bagi semua.
            </p>
          </div>
          <div className="mt-[35px]">
            <h2 className="text-greenBase text-[40px] font-bold">Misi</h2>
            <h2 className="font-bold leading-10 text-neutral-950">
              Menyediakan Akses Informasi yang Komprehensif
            </h2>
            <p className="text-neutral-800">
              Menyediakan sumber daya informatif, penelitian, dan berita terkini
              tentang isu-isu air bersih untuk meningkatkan pemahaman
              masyarakat.
            </p>
            <h2 className="font-bold leading-10 text-neutral-950">
              Memobilisasi Donasi
            </h2>
            <p className="text-neutral-800">
              Mengintegrasikan fitur donasi yang mudah digunakan untuk
              mengumpulkan dana yang diperlukan untuk proyek-proyek air bersih
              yang bermanfaat.
            </p>
            <h2 className="font-bold leading-10 text-neutral-950">
              Mengedukasi dan Mendorong Tindakan
            </h2>
            <p className="text-neutral-800">
              Memberikan panduan praktis, sumber daya, dan petunjuk bagi
              individu, kelompok, dan organisasi yang ingin berkontribusi Donasi
              air.
            </p>
            <h2 className="font-bold leading-10 text-neutral-950">
              Transparansi dan Akuntabilitas
            </h2>
            <p className="text-neutral-800">
              Menyediakan laporan keuangan terbuka dan berkelanjutan untuk
              memastikan bahwa setiap donasi digunakan secara efisien dan
              transparan.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[84px]">
        <h1 className="flex justify-center text-greenBase font-bold text-[40px] ">
          TIM KAMI
        </h1>
        <div className="w-full h-[720px] relative">
          <Image
            src="/assets/frame.png"
            alt="Frame"
            fill
            className="object-cover"
          />
          <div className="w-[1237px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-wrap justify-center gap-[26px]">
              {TeamData.map((data, index) => (
                <CardName
                  key={index}
                  nama={data.nama}
                  role={data.jobdesk}
                  desc={data.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
