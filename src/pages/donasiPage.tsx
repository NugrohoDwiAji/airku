import DonasiForm from "@/components/form/DonasiForm";
import Image from "next/image";
import React from "react";

export default function Donasi() {
  return (
    <div className="w-full mb-[100px]">
      <div className="mt-[98px] w-full h-[277px] relative">
        <Image
          src="/assets/Hero-donasi.png"
          alt="Hero-Profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[1040px] mt-[100px] flex flex-col gap-[70px] mx-auto">
        <div className="flex flex-col gap-[30px] mx-auto">
          <div className="flex justify-center">
            <p className="text-4xl text-greenBase font-semibold">
              SELAMAT DATANG DI HALAMAN DONASI !
            </p>
          </div>
          <div>
            <p className="text-black text-lg">
              Kami sangat menghargai kepedulian Anda terhadap wilayah-wilayah
              yang sedang mengalami kekurangan atau krisis air. Dengan berdonasi
              dalam bentuk uang, Anda dapat memberikan bantuan yang sangat
              berarti bagi mereka yang membutuhkan. Setiap sumbangan Anda akan
              digunakan untuk memperbaiki infrastruktur air., memasang sumur
              bor, atau menyediakan sumber air bersih lainnya. Bersama-sama,
              kita dapat membantu mengatsi masalah kekurangan air dan
              meningkatkan kualitas hidup masyarakat di wilayah tersebut.
            </p>
            <br />
            <p className="text-black text-lg">
              Tidak hanya berupa uang, Anda juga bisa mendonasikan barang atau
              alat seperti pompa air, filer air, ember atau wadah penyimpanan
              air, dan sebagainya yang nantinya juga akan disalurkan ke
              wilayah-wilayah yang mengalami krisis air. Jika anda berkenan,
              silahkan kontak kami ya di sini.
            </p>
          </div>
        </div>
        <div>
          <DonasiForm />
        </div>
      </div>
    </div>
  );
}
