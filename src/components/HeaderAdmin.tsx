import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { IoCloseSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const menus = [
  { link: "/homeAdmin", text: "Home" },
  { link: "/artikelAdmin", text: "Data Artikel" },
  { link: "/dataLapor", text: "Data Lapor" },
  { link: "/donasiAdmin", text: "Data Donasi" },
];

export default function HeaderAdmin() {
  let [open, setopen] = useState(false);
  const currentPath = usePathname();
  return (
    <div className="w-full h-[98px] fixed top-0 bg-background z-50 shadow-md shadow-black">
      <div className="flex justify-between items-center ">
        <div className="ml-14  md:ml-[100px] justify-center mt-5 items-center gap-[17px] inline-flex">
          <Link href="/" className="flex gap-2 ">
            <Image
              alt="logo"
              className="w-[50px] h-[52px]"
              src="/assets/airku.png"
              width={100}
              height={100}
            />
            <div className="text-neutral-300 text-[32px] font-medium">
              airku
            </div>
          </Link>
        </div>
        <div
          onClick={() => setopen(!open)}
          className="text-white text-6xl absolute right-8 top-5 md:hidden"
        >
          {open ? <FiMenu /> : <IoCloseSharp />}
        </div>
        <div className={`md:flex md:items-center md:gap-[50px] text-neutral-200 md:justify-start md:mr-[100px] md:static md:mt-5 absolute right-0 top-24 bg-background md:p-0 p-4 transition-all duration-500 ease-in ${open ? 'hidden' : ''}`}>
          {menus.map((menu, index) => (
            <ul key={index}>
              <li className="text-lg leading-[25.20px] md:p-0 p-5">
                <Link
                  className={classnames({
                    "text-greenBase border-b-2 pb-3 border-greenBase":
                      menu.link === currentPath,
                    "text-neutral-100": menu.link !== currentPath,
                    "hover:text-greenBase transition-colors": true,
                  })}
                  href={menu.link}
                >
                  {menu.text}
                </Link>
              </li>
            </ul>
          ))}
          <div className="flex items-center gap-2 bg-greenBase px-3 py-3 text-lg rounded-lg text-white font-medium hover:translate-x-1 transition-all">
            <BiLogIn />
            <Link href="/loginPage">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
