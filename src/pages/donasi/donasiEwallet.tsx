import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type UserData = {
  nama: string
  whatsapp: string
  donasi: string
}

export default function DonasiEwallet() {
  const router = useRouter();
  const [data, setData] = useState<UserData>()

  useEffect(() => {
    if (router.query.formDataJson) {
      try {
        const parsedData = JSON.parse(router.query.formDataJson as string);
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [router.query.formDataJson]);
  return (
    <div className="container mt-[200px]">
      <div className="w-[1040px] flex flex-col justify-center gap-[75px] mx-auto">
        <div className="w-[750px] flex flex-col gap-[50px] mx-auto">
          <div className="m-auto">
            <h1 className="text-greenBase text-4xl font-semibold">
              SELANGKAH LAGI UNTUK BERDONASI !
            </h1>
          </div>
          <div>
            <p className="text-lg text-neutral-700 font-bold">
              Anda telah memilih untuk berdonasi melalaui Transfer bank, berikut
              data diri Anda :
            </p>
            <div className="mt-5">
              <p className="text-neutral-700 text-lg font-bold">
                Nama :{" "}
                <span className="text-neutral-400 text-lg font-normal">
                {data?.nama}
                </span>
              </p>
              <p className="text-neutral-700 text-lg font-bold">
                No. Hp / Whatapp:{" "}
                <span className="text-neutral-400 text-lg font-normal">
                {data?.whatsapp}
                </span>
              </p>
              <p className="text-neutral-700 text-lg font-bold">
                Jumlah Donasi :{" "}
                <span className="text-neutral-400 text-lg font-normal">
                {data?.donasi},-
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[459px] flex flex-col gap-[31px] mx-auto">
          <div className="mx-auto">
            <p className="text-neutral-700 text-lg">
              Scan kode QRIS berikut untuk berdonasi :
            </p>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <Image src="/assets/qriss.png" alt="Qris" width={300} height={300} className="w-[330px] h-[330px] " />
        
          </div>
          <div className="flex justify-center">
          <button className="bg-greenBase text-white px-4 py-2 rounded-lg">Download QRIS</button>
          </div>
          <div className="w-[350px] mx-auto">
            <p className=" text-neutral-700 text-lg">
              Harap transfer sesuai nominal yang Anda
            </p>
            <p className="flex justify-center text-neutral-700 text-lg">
              input di form sebelumnya yaa!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="mx-auto mb-[31px]">
            <p className="text-greenBase text-4xl font-semibold">
              Frequently Asked Question
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg px-3 py-2">
            <p className=" text-neutral-200">
              Bagaimana cara transfer donasi melalui mesin{" "}
              <span className="font-bold text-neutral-600"> ATM </span> ?
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg text-neutral-200 font-medium px-3 py-2">
            <p>
              1. Masukkan kartu{" "}
              <span className="font-bold text-neutral-600">ATM</span> dan input
              PIN Anda.
            </p>
            <p>
              2. Pilih ‘Bahasa Indonesia’ untuk memudahkan{" "}
              <span className="font-bold text-neutral-600">transaksi</span>.
            </p>
            <p>
              3. Pilih{" "}
              <span className="font-bold text-neutral-600">Transaksi</span>{" "}
              lainnya.
            </p>
            <p>
              4. Pilih{" "}
              <span className="font-bold text-neutral-600">Transfer</span>
            </p>
            <p>
              5. Masukkan kode ‘002+rekening{" "}
              <span className="font-bold text-neutral-600">BRI</span> yang
              dituju’ , misalnya 002002xxxxxxxx.
            </p>
            <p>
              6.Masukkan nominal yang ingin ditransfer, kemudian pilih ‘Benar’.
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg px-3 py-2">
            <p className=" text-neutral-200">
              Bagaimana cara transfer donasi melalui M-Banking ?
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg text-neutral-200 font-medium px-3 py-2">
            <p>
              1. Masuk atau login ke dalam aplikasi{" "}
              <span className="font-bold text-neutral-600">Mobile Banking</span>{" "}
              dan pilih menu{" "}
              <span className="font-bold text-neutral-600">Tranfer</span>.
            </p>
            <p>
              2. Masukkan nomor rekening serta{" "}
              <span className="font-bold text-neutral-600">Bank</span> yang
              dituju.
            </p>
            <p>
              3. Masukkan nominal atau jumlah yang ingin Anda{" "}
              <span className="font-bold text-neutral-600">Transfer</span>.
            </p>
            <p>4. Konfirmasi dengan PIN transaksi ANDA</p>
            <p>
              5. <span className="font-bold text-neutral-600">Transfer</span>{" "}
              selesai.
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg px-3 py-2">
            <p className=" text-neutral-200">
              Bagaimana cara transfer donasi dengan QRIS ?
            </p>
          </div>
          <div className="w-full bg-slate-500 rounded-lg text-neutral-200 font-medium px-3 py-2">
            <p>
              1. Pindai / scan kode{" "}
              <span className="font-bold text-neutral-600">QRIS</span> yang
              sudah di-generate oleh pihak penerima dana terlebih dahulu.{" "}
            </p>
            <p>2. Pilih sumber dana.</p>
            <p>3. Pastikan jumlah dana yang akan ditransfer.</p>
            <p>4. Masukkan PIN.</p>
            <p>
              5. Akan muncul notifikasi apakah transfer sudah berhasil atau
              tidak.
            </p>
            <p>
              6. Selesai transfer pastikan rekening penerima sudah bertambah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
