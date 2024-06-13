import FormInput from "@/components/form/FormInput";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import registerValidation from "@/validations/registerValidation";
import axios from "axios";
import useLoading from "@/hooks/useLoading";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type RegisterType = {
  nama: string;
  email: string;
  password: string;
  rePassword: string;
};

export default function RegisterPage() {
  const { data: session } = useSession();
  const [register, setRegister] = useState<RegisterType[]>([]);
  const [validationMsg, setValidationMsg] = useState<any>(null);
  const { showLoading, Loading } = useLoading();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    showLoading(true, "Registration...");
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(formData.entries()) as RegisterType;

    const validate = registerValidation.safeParse(formDataJson);
    if (validate.success === false) {
      console.log(validate.error.flatten().fieldErrors);
      return setValidationMsg(validate.error.flatten().fieldErrors);
    }

    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    if (password !== rePassword) {
      showLoading(false, null);
      return setValidationMsg({ matchPassword: "Password Tidak Cocok" });
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/register",
        formDataJson
      );

      setValidationMsg(null);
      showLoading(false, null);
      router.push("/loginPage");
    } catch (error) {
      console.log("error: ", error);
    }

    setValidationMsg(null);
  }
  return (
    <div
      className="h-screen w-screen mt-[100px] flex justify-center bg-bottom bg-no-repeat bg-[length:100%_200px]"
      style={{ backgroundImage: "url('/assets/bg-regist.jpg')" }}
    >
      <Loading />
      <div className="h-[540px] w-[1110px] flex justify-between">
        <div className="h-[540px] w-[580px] relative">
          <Image src={"/assets/ilustrasi-regist.png"} alt="" fill />
        </div>
        <div className="h-[540px] w-[400px] ">
          <h1 className="text-4xl mb-[30px] font-bold w-[450px] ">
            Sign Up Airku
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
              {validationMsg?.matchPassword && (
                <p className="bg-blue-500 text-white px-2 py-3 rounded-lg">{validationMsg.matchPassword}</p>
              )}
            </div>
            <FormInput
              label="Nama"
              type="text"
              id="nama"
              validation={validationMsg?.nama}
              placeholder="Enter Your Name"
            />
            <FormInput
              label="Email"
              type="email"
              id="email"
              validation={validationMsg?.email}
              placeholder="Enter Your Email"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              validation={validationMsg?.password}
              placeholder="********"
            />
            <FormInput
              label="Ulangi Password"
              type="password"
              id="rePassword"
              validation={validationMsg?.rePassword}
              placeholder="********"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 rounded-md text-white py-[7px] my-[15px] hover:bg-teal-700 transition-colors"
            >
              Sign Up
            </button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-4 p-2 mb-[15px]"
              />
              <h1 className="-mt-4 ">Agree to Terms and Conditions</h1>
            </div>
          </form>

          <div className="flex gap-2 items-center ">
            <hr className="border-[1px] border-solid border-black w-[210px]" />
            <h1 className="text-xl">or</h1>
            <hr className="border-[1px] border-solid border-black w-[210px]" />
          </div>
          <Link
            href={"#"}
            className="w-full border-2 border-blue-700 px-[7px] text-blue-700 flex justify-center items-center rounded-full mt-4 mb-5 p-1 gap-2 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors"
          >
            {" "}
            <BsGoogle />
            Login With Google
          </Link>
          <div className="flex w-full justify-center">
            <h1>Sudah Punya Akun ? </h1>
            <Link
              href={"/loginPage"}
              className="text-teal-600 hover:text-teal-700 hover:underline transition-colors"
            >
              Login Di Sini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
