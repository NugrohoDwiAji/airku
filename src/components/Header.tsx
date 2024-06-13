import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { IoCloseSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const menus = [
  { link: "/", text: "Home" },
  { link: "/profilePage", text: "Profile" },
  { link: "/artikelPage", text: "Artikel" },
  { link: "/laporPage", text: "Lapor" },
  { link: "/donasiPage", text: "Donasi" },
];

export default function Header() {
  let [open, setopen] = useState(false);
  const { data: session } = useSession();
  const currentPath = usePathname();
  return (
    <div className="w-full md:h-[98px] h-16 fixed top-0 bg-background z-50 shadow-md shadow-black">
      <div className="flex justify-between items-center ">
        <div className="ml-5  md:ml-[100px] justify-center mt-5 items-center gap-[17px] inline-flex">
          <Link href="/" className="flex gap-2 ">
            <Image
              alt="logo"
              className="md:w-[50px] md:h-[52px] w-8"
              src="/assets/airku.png"
              width={100}
              height={100}
            />
            <div className="text-neutral-300 text-base font-medium">
              airku
            </div>
          </Link>
        </div>
        <div
          onClick={() => setopen(!open)}
          className="text-white text-3xl absolute right-8 top-5 md:hidden"
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
          {session ? (
            <div className="flex items-center gap-5 text-lg">
              <p className="">
                {session?.user?.email}
              </p>
              <button
                className="bg-greenBase text-white rounded-lg py-3 px-3 focus:outline-none"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-greenBase px-3 py-3 text-lg rounded-lg text-white font-medium hover:translate-x-1 transition-all cursor-pointer">
              <BiLogIn />
              {/* <Link href="/loginPage">Log In</Link> */}
              <button onClick={() => signIn()}>Login</button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
