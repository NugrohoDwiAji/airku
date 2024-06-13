import React from "react";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";

type cardArtikelTipe = {
  src: string;
  title: string;
  desc: string;
  time: string;
  link: string
};

export default function CardArtikel(props: cardArtikelTipe) {
  return (
    <div
      className="bg-background w-[280px] p-[15px] rounded-lg border hover:scale-105 transition-all"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="relative rounded-lg h-[122px] w-[250px]">
        <Image src={props.src} alt="" fill className="bg-teal-600 rounded-lg" />
      </div>
      <div className="mt-[14px] flex">
        <div className="w-[24px] h-[25px] relative">
          <Image src="/assets/timeTable.png" alt="" fill />
        </div>
        <h3 className="ml-2 text-sm text-neutral-300">{props.time}</h3>
      </div>
      <h1 className="mt-[16px] text-teal-600 font-semibold">{props.title}</h1>
      <p className="mt-[4px] font-medium text-neutral-400 text-sm">
        {props.desc}
      </p>
      <Link
        href={props.link}
        className="flex items-center bg-white border-2 font-semibold rounded-lg py-[8px] px-[12px] text-[14px] text-neutral-700 mt-[12px] hover:translate-x-1 transition-all"
      >
        Selengkapnya
        <div className="ml-[6px]">
          <GrLinkNext />
        </div>
      </Link>
    </div>
  );
}
