import HeaderAdmin from "@/components/HeaderAdmin";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function InputBerita() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formElemen = e.target as HTMLFormElement;
    const formData = new FormData(formElemen);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/berita",
        formData
      );
      router.push("/artikelAdmin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderAdmin />
      {/* Your JSX */}
      <form
        onSubmit={handleSubmit}
        className="mt-40 flex flex-col justify-center items-center gap-4"
      >
        <input
          type="file"
          name="image"
          className="w-[60rem] border-2 bg-gray-400 h-80"
        />
        <input type="date" name="date" className="w-[60rem]" />
        <input
          type="text"
          name="title"
          className="border-2 border-gray-500 border-dashed w-[60rem] h-16 px-2"
          placeholder="MASUKAN JUDUL BERITA DI SINI"
        />
        <input
          type="text"
          name="sumber"
          className="border-2 border-gray-500 border-dashed w-[60rem] h-16 px-2"
          placeholder="MASUKAN SUMBER BERITA DI SINI"
        />
        <div className="mt-2">
            <p className="text-neutral-950 mb-2 flex justify-center">Kategori</p>
            <select
              name="kategori"
              className="w-full border-2 rounded-lg py-3 pl-2 pr-8 focus:outline-none"
            >
              <option value="nilai1" className="text-gray-500">
                --Pilihan--
              </option>
              <option value="berita" className="p-2">
                Berita
              </option>
              <option value="artikel" className="p-2">
                Artikel
              </option>
              <option value="edukasi" className="p-2">
                Edukasi
              </option>
            </select>
          </div>
        <input type="text" name="desc" className="border-2 w-[60rem] h-52" />
        <button
          type="submit"
          className="bg-greenBase px-5 py-3 mb-3 rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
}
