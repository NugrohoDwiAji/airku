import React, { FormEvent, useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";
import FormInput from "./FormInput";
import donasiValidation from "@/validations/donasiValidation";
import { useRouter } from "next/router";
import axios from "axios";
import useLoading from "@/hooks/useLoading";


type DonasiType = {
  nama: string;
  whatsapp: string;
  email: string;
  donasi: string;
  doa: string;
  paymentMethod: string;
};

export default function DonasiForm() {
  const router = useRouter();
  const [erorr, setErorr] = useState("");
  const [validationMsg, setValidationMsg] = useState<any>(null);
  const { showLoading, Loading } = useLoading();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    showLoading(true, "Mengirim Donasi...")
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(formData.entries()) as DonasiType;

    const validate = donasiValidation.safeParse(formDataJson);

    if (validate.success === false) {
      console.log(validate.error.flatten().fieldErrors);
      return setValidationMsg(validate.error.flatten().fieldErrors);
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/donasi",
        formDataJson
      );
    } catch (error) {
      setErorr("Gagal Mengirim data Donasi");
      showLoading(false, null)
    }

    const selectedPaymentMethod = formDataJson.paymentMethod;
    // Arahkan ke halaman sesuai dengan pilihan pembayaran
    switch (selectedPaymentMethod) {
      case "bank":
        await router.push({
          pathname: "/donasi/donasiBank",
          query: { formDataJson: JSON.stringify(formDataJson) },
        });
        break;
      case "ewallet":
        await router.push({
          pathname: "/donasi/donasiEwallet",
          query: { formDataJson: JSON.stringify(formDataJson) },
        });
        break;
      default:
        setErorr("Metode pembayaran tidak valid");
        showLoading(false, null)
    }

    setValidationMsg(null);
  }
  return (
    <div className="flex flex-col justify-center">
      <Loading />
      <div className="flex justify-center">
        <p className="text-neutral-700 text-2xl font-medium mb-2">
          Data Pendonasi
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mb-10 border rounded-lg p-5 bg-slate-100"
      >
        {erorr && (
          <p className="bg-blue-400 p-3 w-full rounded-lg mb-2 text-white">
            {erorr}
          </p>
        )}
        <div className="flex flex-col gap-4">
          <FormInput
            label="Nama Lengkap*"
            type="text"
            id="nama"
            validation={validationMsg?.nama}
            placeholder="Cristiano Ronaldo"
          />
          <FormInput
            label="No.HP / Whatsapp*"
            type="text"
            id="whatsapp"
            validation={validationMsg?.whatsapp}
            placeholder="08190745xxx"
          />
          <FormInput
            label="Alamat Email*"
            type="email"
            id="email"
            validation={validationMsg?.email}
            placeholder="Cristianoronaldo@gmail.com"
          />
          <FormInput
            label="Jumlah Donasi*"
            type="text"
            id="donasi"
            validation={validationMsg?.donasi}
            placeholder="Rp.125000,-"
          />
          <div className="mt-1.5 relative">
            <p className="text-neutral-950">Doa dan Harapan*</p>
            <textarea
              id="doa"
              name="doa"
              placeholder="Mohon Doa..."
              className="h-[207px] border-2 mt-1.5 p-2 font-medium w-full rounded-lg focus:outline-none"
            />
            <PiWarningCircleLight className="absolute right-2 top-12 transform -translate-y-1/2 text-stone-400" />
          </div>
          <div className="mt-2">
            <p className="text-neutral-950">Metode Pembayaran Donasi*</p>
            <select
              name="paymentMethod"
              className="w-full border-2 rounded-lg py-3 pl-2 pr-8 focus:outline-none"
            >
              <option value="nilai1" className="text-gray-500">
                --Pilihan--
              </option>
              <option value="bank" className="p-2">
                Transfer Bank
              </option>
              <option value="ewallet" className="p-2">
                E-Wallet
              </option>
            </select>
          </div>
          <div className="mt-[30px] flex justify-center">
            <button className="flex items-center bg-greenBase px-3 py-3 rounded-lg text-white font-medium hover:translate-x-1 transition-all">
              Donasi Sekarang
              <div className="ml-1">
                <AiOutlineGift />
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
