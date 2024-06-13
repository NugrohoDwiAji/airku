import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/Fa";
import { FaGithub } from "react-icons/Fa";
import { FaLinkedin } from "react-icons/Fa";
import Link from "next/link";

type CardNameType = {
  nama: string;
  role: string;
  desc: string;
};

export default function CardName({ nama, role, desc }: CardNameType) {
  return (
    <div
      className="h-[253px] w-[395px] bg-white bg-no-repeat bg-right-bottom p-[25px] rounded-lg shadow-sm shadow-slate-900 hover:scale-105 transition-all"
      style={{ backgroundImage: "url('/assets/airku-card.png')" }}
      data-aos="flip-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="flex items-center gap-[25px]">
        <div className="relative rounded-full h-16 w-16 ">
          <Image
            src="/assets/airku.png"
            alt=""
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">{nama}</h1>
          <h2>{role}</h2>
        </div>
      </div>
      <div className="mt-[25px] text-gray-600 ">
        <p>{desc}</p>
      </div>
      <div className=" flex gap-[9px] mt-[18px]">
        <div className="border rounded-full p-2 hover:text-greenBase hover:border-greenBase transition-all">
          <Link href="">
            <FaInstagram />
          </Link>
        </div>
        <div className="border rounded-full p-2 hover:text-greenBase hover:border-greenBase transition-all">
          <Link href="">
            <FaGithub />
          </Link>
        </div>
        <div className="border rounded-full p-2 hover:text-greenBase hover:border-greenBase transition-all">
          <Link href="">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
