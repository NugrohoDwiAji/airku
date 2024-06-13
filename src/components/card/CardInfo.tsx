import React from "react";
import Image from "next/image";

type cardInfoTipe = {
  src: string;
  angka: string;
  title: string;
};

export default function CardInfo(props: cardInfoTipe) {
  return (
    <div
      data-aos="flip-left"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      className=" bg-white h-[191px] w-[350px] flex flex-col justify-center items-center  bg-no-repeat bg-auto bg-right-bottom rounded-lg ) "
      style={{ backgroundImage: "url('/assets/airku-bg1.png')" }}
    >
      <div className="relative h-[75px] w-[75px]">
        <Image src={props.src} alt="" fill />
      </div>
      <h1 className="text-xl font-semibold text-[#0d9485] mt-2">
        {props.angka}
      </h1>
      <h2 className="text-sm">{props.title}</h2>
    </div>
  );
}
