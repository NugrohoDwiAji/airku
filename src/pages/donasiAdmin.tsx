import CardInfoAdmin from "@/components/card/CardInfoAdmin";
import Footer from "@/components/Footer";
import HeaderAdmin from "@/components/HeaderAdmin";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

type DonasiType = {
  id: string;
  nama: string;
  whatsapp: string;
  email: string;
  donasi: string;
  doa: string;
  metode: string;
};

export default function DonasiAdmin() {
  const [donasiData, setDonasiData] = useState<DonasiType[]>([]);

  async function getData() {
    // showSnackbar(true, "Mengambil data ...");
    const response = await axios.get("http://localhost:3000/api/donasi", {});
    setDonasiData(response.data);
    // showSnackbar(false, null);
  }

  async function handleDelete(id: string) {
    // showSnackbar(true, "Menghapus Data ...");

    const response = await axios.delete(
      `http://localhost:3000/api/donasi?id=${id}`
    );
    const temp = donasiData.filter((item) => item.id !== response.data.id);
    setDonasiData(temp);
    // showSnackbar(false, null);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full mb-[100px]">
      <HeaderAdmin />
      <div
        className="mt-[93px] h-[277px] flex justify-center items-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('/assets/HeroAdminProfile.jpg')" }}
      >
        KELOLA DATA DONASI
      </div>
      <div className="flex justify-between mt-5 px-5">
        <div className="flex gap-1 items-center">
          <h1>Show</h1>
          <h1 className="w-14 h-8 border-2 flex justify-between">
            {"11"}
            <div className="flex flex-col">
              <button>
                <GoTriangleUp />{" "}
              </button>
              <button>
                <GoTriangleDown />{" "}
              </button>
            </div>
          </h1>
          <h1>Entries</h1>
        </div>
        <div className="border-2 flex  text-lg items-center justify-between w-64  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="focus:outline-none"
          />
          <button className="text-3xl text-gray-300 hover:bg-gray-100 ">
            <IoIosSearch />
          </button>
        </div>
      </div>
      <h1 className="w-14 h-8 border-2 ml-[62px] mt-2">{""}</h1>
      <table className="table-fixed m-auto">
        <thead className="borde-2border-black">
          <tr>
            <td>No.</td>
            <td>Nama Lengkap</td>
            <td>No.Hp</td>
            <td>Alamat Email</td>
            <td>Jumlah Donasi</td>
            <td>Keterangan</td>
            <td>Metode Bayar</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {donasiData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.whatsapp}</td>
              <td>{item.email}</td>
              <td>Rp.{item.donasi}</td>
              <td>{item.doa}</td>
              <td>{item.metode}</td>
              <td>
                <div className="px-6 py-1.5 flex gap-3">
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => {
                      // setDataState("update");
                      // setUpdateIndex(index);
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6 2c-1.11 0-2 .89-2 2v16a2 2 0 002 2h4v-1.91L12.09 18H6v-2h8.09l2-2H6v-2h12.09L20 10.09V8l-6-6H6m7 1.5L18.5 9H13V3.5m7.15 9.5a.55.55 0 00-.4.16l-1.02 1.02 2.09 2.08 1.02-1.01c.21-.22.21-.58 0-.79l-1.3-1.3a.544.544 0 00-.39-.16m-2.01 1.77L12 20.92V23h2.08l6.15-6.15-2.09-2.08z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(item.id!)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                    >
                      <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 justify-end mt-5 mr-5">
          <button className="flex items-center px-2 py-2 border-2 bg-violet-700">previous</button>
          <h1  className="flex items-center px-2 border-2">1</h1>
          <h1  className=" px-2 flex items-center border-2 bg-violet-700">2</h1>
          <button  className="px-2 flex items-center py-2 border-2 bg-violet-700">Next</button>
        </div>
    </div>
  );
}
