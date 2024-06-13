import { useState, FormEvent, ChangeEvent } from "react";
import { BsCursor } from "react-icons/bs";
import FormInput from "./FormInput";
import laporValidation from "@/validations/laporValidation";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import { useRouter } from "next/navigation";
import useLoading from "@/hooks/useLoading";

type laporanDatatype = {
  nama: string;
  whatsapp: string;
  email: string;
  namaJalan: string;
  provinsi: string;
  kecamatan: string;
  kota: string;
  keterangan: string;
};

export default function LaporForm() {
  const [validationMsg, setValidationMsg] = useState<any>(null);
  const [images, setImages] = useState<File[]>([]);
  const { showLoading, Loading } = useLoading();
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    showLoading(true, "Mengirim Laporan...");
    const formElemen = e.target as HTMLFormElement;
    const formData = new FormData(formElemen);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("file", images[i]);
      }
    }

    const formDataJson = Object.fromEntries(
      formData.entries()
    ) as laporanDatatype;

    const validate = laporValidation.safeParse(formDataJson);
    if (validate.success === false) {
      console.log(validate.error.flatten().fieldErrors);
      return setValidationMsg(validate.error.flatten().fieldErrors);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/laporan",
        formData
      );
      router.push("/")
    } catch (error) {
      console.log(error);
    }
    setValidationMsg(null);
  }

  // Function to handle image changes
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      setImages([...images, ...selectedImages]);
    }
  };

  // Function to handle image removal
  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="w-[1040px] mt-[104px] mx-auto">
      <Loading />
      <h1 className="text-2xl text-neutral-700 font-medium text-center mb-2 ">
        DATA LAPOR
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mb-10 border rounded-lg p-5 bg-slate-100"
      >
        <p className="text-lg text-greenBase font-semibold">Data pelapor</p>
        <div className="flex flex-col gap-4 justify-start">
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
            placeholder="081937500++"
          />
          <FormInput
            label="Alamat Email*"
            type="email"
            id="email"
            validation={validationMsg?.email}
            placeholder="Critiaonorenaldi@gmail.com"
          />
        </div>
        <p className="text-lg text-greenBase font-semibold mt-6">
          Alamat Tempat Kejadian
        </p>
        <div className="flex flex-col gap-4 justify-start">
          <FormInput
            label="Nama Jalan*"
            type="text"
            id="namaJalan"
            validation={validationMsg?.namaJalan}
            placeholder="jalan cempaka no.7"
          />
          <FormInput
            label="Provinsi*"
            type="text"
            id="provinsi"
            validation={validationMsg?.provinsi}
            placeholder="Nusa Tenggara Barat"
          />
          <FormInput
            label="Kota*"
            type="text"
            id="kota"
            validation={validationMsg?.kota}
            placeholder="Mataram"
          />
          <FormInput
            label="Kecamatan*"
            type="text"
            id="kecamatan"
            validation={validationMsg?.kecamatan}
            placeholder="Sekarbela"
          />
        </div>

        <div className="flex flex-col gap-1.5 justify-start mt-6">
          <p className="text-lg text-greenBase font-semibold">
            Detail Kejadian
          </p>
          <p className="text-neutral-950 text-sm">Upload Foto Kejadian*</p>
          <div className="grid grid-cols-7 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative ">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-[132px] h-[132px] object-cover rounded-lg "
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-1 right-0 p-1 bg-red-500 text-white rounded-full hover:scale-105 transition-all"
                >
                  <RxCrossCircled />
                </button>
              </div>
            ))}
            <div>
              <input
                type="file"
                onChange={handleImageChange}
                multiple
                accept=".png, .jpg, .jpeg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <p className="text-neutral-950">Keterangan Kejadian*</p>
          <textarea
            typeof="text"
            name="keterangan"
            placeholder="Masukan Laporan Anda..."
            className="h-[207px] border-2 mt-1.5 p-2 font-medium w-full rounded-lg focus:outline-none"
          />
          <p className="text-neutral-400 text-sm">
            Saya melaporkan secara jujur dan saya akan mempertanggungjawabkan
            laporan yang saya kirim
          </p>
        </div>
        <div className="mt-[50px] flex justify-center">
          <button
            type="submit"
            className="flex items-center bg-greenBase px-3 py-3 rounded-lg text-white font-medium hover:translate-x-1 transition-all"
          >
            Laporkan Sekarang
            <div className="ml-1">
              <BsCursor />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
