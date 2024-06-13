import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/Fa";
import { FaGithub } from "react-icons/Fa";
import { FaFacebook } from "react-icons/Fa";
import { FaYoutube } from "react-icons/Fa";
import { FaLinkedin } from "react-icons/Fa";
import { FaTwitter } from "react-icons/Fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const menus = [
    { link: "/", text: "Home" },
    { link: "/profilePage", text: "Profile" },
    { link: "/artikelPage", text: "Artikel" },
    { link: "/laporPage", text: "Lapor" },
    { link: "/donasiPage", text: "Donasi" },
  ];

  return (
    <div className="w-full flex flex-col justify-between items-center bg-background h-[370px] xl:h-[468px] shrink-0">
      <div className="xl:h-[267px] mt-5 xl:mt-[100px] justify-start items-start px-5 xl:px:0 gap-5 xl:gap-[88px] xl:inline-flex ">
        <div className="xl:h-[253px] flex-col justify-start items-start gap-5 xl:gap-[35px] inline-flex xl:w-[339px]">
          <div className="inline-flex items-center gap-2 xl:gap-[17px]">
            <span className="w-[18px] h-[18px] xl:w-[50px] xl:h-[52px] relative">
              <Image src="/assets/airku.png" alt="logo" fill />
            </span>
            <p className="text-neutral-300 text-sm xl:text-[32px] font-semibold leading-[120%] tracking-[-0.96px]">
              AIRKU
            </p>
          </div>
          <p className="text-xs xl:text-base xl:font-medium text-neutral-500">
            Sebuah web yang menyediakan informasi tentang ketersediaan air
            bersih di suatu daerah dan memiliki fitur pelaporan untuk membantu
            memudahkan sektor swasta atau organisasi peduli masyarakat dalam
            membantu masyarakat.
          </p>
        </div>
        <div className="">
          <span className="font-bold text-xs xl:text-lg text-neutral-400 leading-[25.20px]">
            Useful Links
          </span>
          <span className="flex xl:flex-col gap-6 leading-snug xl:mt-4 text-xs md:text-base  text-neutral-300">
            {menus.map((menu, index) => (
              <ul key={index}>
                <li className="hover:translate-x-1 transition-all hover:text-greenBase">
                  <Link href={menu.link}>{menu.text}</Link>
                </li>
              </ul>
            ))}
          </span>
        </div>
        <div className="w-[323px] h-[77px] flex-col mt-4 md:mt-0 justify-start items-start xl:gap-[19px] inline-flex">
          <span className="font-bold text-xs xl:text-lg leading-[25.20px] text-neutral-400">
            Connect With Us
          </span>
          <div className="flex justify-between gap-6 text-neutral-300 text-xs">
            <div className="border rounded-full p-2 hover:text-greenBase hover:border-greenBase transition-all">
              <Link href="">
                <FaInstagram />
              </Link>
            </div>

            <div className="border rounded-full p-2 hover:text-[#3b5998] hover:border-[#3b5998] transition-all">
              <Link href="">
                <FaFacebook />
              </Link>
            </div>

            <div className="border rounded-full p-2 hover:text-[#ff0000] hover:border-[#ff0000] transition-all">
              <Link href="">
                <FaYoutube />
              </Link>
            </div>

            <div className="border rounded-full p-2 hover:text-blue-500 hover:border-blue-500 transition-all">
              <Link href="">
                <FaTwitter />
              </Link>
            </div>

            <div className="border rounded-full p-2 hover:text-[#007bb5] hover:border-[#007bb5] transition-all">
              <Link href="">
                <FaLinkedin />
              </Link>
            </div>

            <div className="border rounded-full p-2 hover:text-greenBase hover:border-greenBase transition-all">
              <Link href="">
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-4 text-xs xl:text-lg font-bold">
          <span className="leading-[25.20px] text-neutral-400">Contact Us</span>
          <span className="text-neutral-500">airkucare@gmail.com</span>
          <span className="text-neutral-500">+62 813 3341 2983</span>
        </div>
      </div>
      <div className="w-[215px] mb-5 mt-5 h-5 xl:mb-[37px] justify-start items-end gap-1.5 inline-flex">
        <div className="text-zinc-500 text-xs font-semibold font-['Poppins']">
          &copy;2023 - AIRKU. All Right Reserved
        </div>
      </div>
    </div>
  );
}
