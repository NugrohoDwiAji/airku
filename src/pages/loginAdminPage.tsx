import FormInput from "@/components/form/FormInput";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import laporValidation from "@/validations/laporValidation";
import loginValidation from "@/validations/loginValidation";

type LoginType = {
  email: string;
  password: string;
};

export default function LoginAminPage() {
  const [login, setLogin] = useState<LoginType[]>([]);
  const [validationMsg, setValidationMsg] = useState<any>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(formData.entries()) as LoginType;

    const validate = loginValidation.safeParse(formDataJson);
    if (validate.success === false) {
      console.log(validate.error.flatten().fieldErrors);
      return setValidationMsg(validate.error.flatten().fieldErrors);
    }

    setValidationMsg(null);
    const temp = [...login];
    temp.push(formDataJson);
    setLogin(temp);
    console.log(login);
  }
  return (
    <div className=" flex h-screen justify-between">
      <div
        className="w-1/2 h-[100%] bg-cover flex flex-col justify-center items-center  "
        style={{ backgroundImage: "url('/assets/bg-login.jpg')" }}
      >
        <div className="relative h-[75px] w-[72px]">
          <Image src={"/assets/airku.png"} alt="" fill />
        </div>
        <h1 className="text-white text-4xl font-bold">Airku</h1>
      </div>
      <div
        className="h-[100%] w-1/2 flex items-center flex-col justify-center m-auto bg-no-repeat bg-[length:100%_150px] bg-bottom"
        style={{ backgroundImage: "url('/assets/bg-login2.jpg')" }}
      >
        <h1 className="text-5xl mb-[30px] font-bold w-[450px] ">Login Admin Airku</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <FormInput
              label="Email"
              type="email"
              id="email"
              validation={validationMsg?.email}
              placeholder="masbudi@gmail.com"
            />
          </div>
          <div>
            <FormInput
              label="Password"
              type="password"
              id="password"
              validation={validationMsg?.password}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-[450px] bg-teal-600 rounded-md text-white py-[7px] my-[15px] hover:bg-teal-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-teal-600 w-[450px] flex justify-between mb-[30px]a">
        <Link href={"/loginPage"} className=" hover:text-teal-700 hover:underline transition-colors">Login Sebagai User</Link>
        <Link
          href={"/resetPasswordPage"}
          className=" hover:text-teal-700 hover:underline transition-colors"
        >
          Lupa password ?
        </Link>
        
        </div>
        <div className="flex gap-2 items-center ">
          <hr className="border-[1px] border-solid border-black w-[210px]" />
          <h1 className="text-xl">or</h1>
          <hr className="border-[1px] border-solid border-black w-[210px]" />
        </div>
        <Link
          href={"#"}
          className="w-[450px] border-2 border-blue-700 px-[7px] text-blue-700 flex justify-center items-center rounded-xl my-4 p-2 gap-2 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors"
        >
          {" "}
          <BsGoogle />
          Login With Google
        </Link>
        <div className="flex w-[450px] justify-center">
          <h1>Belum Punya Akun ?</h1>
          <Link
            href={"/registerPage"}
            className="text-teal-600 hover:text-teal-700 hover:underline transition-colors"
          >
            Daftar Di Sini
          </Link>
        </div>
      </div>
    </div>
  );
}
