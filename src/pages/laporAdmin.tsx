import CardInfoAdmin from "@/components/card/CardInfoAdmin";
import Footer from "@/components/Footer";
import HeaderAdmin from "@/components/HeaderAdmin";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

export default function LaporAdmin() {
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
            <td>Nama jalan</td>
            <td>Provinsi</td>
            <td>Kota</td>
            <td>Kecamatan</td>
            <td>Foto</td>
            <td>Keterangan</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cristian renaldi</td>
            <td>0894683481</td>
            <td>cristianrenaldi@gmail.com</td>
            <td>ooo</td>
            <td>mjkk</td>
            <td>jkknkn</td>
            <td>jbj</td>
            <td>mjkk</td>
            <td>jkknkn</td>
            <td>jbj</td>
          </tr>
        </tbody>
      </table>
      <div>
        <div className="flex gap-3 justify-end mt-5 mr-5">
          <button className="flex items-center px-2 py-2 border-2 bg-violet-700">previous</button>
          <h1  className="flex items-center px-2 border-2">1</h1>
          <h1  className=" px-2 flex items-center border-2 bg-violet-700">2</h1>
          <button  className="px-2 flex items-center py-2 border-2 bg-violet-700">Next</button>
        </div>
      </div>
    </div>
  );
}
