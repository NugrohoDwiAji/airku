import Image from "next/image";
import LaporForm from "@/components/form/laporForm";

export default function Lapor() {
  return (
    <div className="w-full mb-[100px]">
      <div className="mt-[98px] h-[277px] relative">
        <Image
          src="/assets/Hero-lapor.png"
          alt="Hero-Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-[896px] flex flex-col justify-start gap-5 mt-[100px] mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-greenBase">
            KEJADIAN APA YANG BISA ANDA LAPORKAN?
          </h1>
        </div>

        <div className="flex justify-between">
          <div className="pt-8">
            <Image
              src="/assets/Rectangle37.png"
              alt="gambar"
              width={400}
              height={400}
              className="w-[150px] h-[150px] mx-auto "
            />
            <p className="text-lg text-greenBase font-semibold">
              KEBOCORAN PADA SALURAN AIR
            </p>
          </div>

          <div className="pt-8">
            <Image
              src="/assets/Rectangle38.png"
              alt="gambar"
              width={400}
              height={400}
              className="w-[150px] h-[150px] mx-auto "
            />
            <p className="text-lg text-greenBase font-semibold">
              SALURAN AIR TERSUMBAT
            </p>
          </div>

          <div className="pt-8">
            <Image
              src="/assets/Rectangle39.png"
              alt="gambar"
              width={400}
              height={400}
              className="w-[150px] h-[150px] mx-auto "
            />
            <p className="text-lg text-greenBase font-semibold">
              AIR YANG MENGALIR TERCEMAR
            </p>
          </div>
        </div>
      </div>
      <div>
        <LaporForm />
      </div>
    </div>
  );
}
