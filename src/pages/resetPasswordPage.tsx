import FormInput from "@/components/form/FormInput";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import resetPasswordValidation from "@/validations/resetPasswordValidation";

type ResetPasswrdType = {
  email: string;
  password: string;
};

export default function ResetPasswordPage() {
  const [resetPassword, setResetPassword] = useState<ResetPasswrdType[]>([]);
  const [validationMsg, setValidationMsg] = useState<any>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(
      formData.entries()
    ) as ResetPasswrdType;

    const validate = resetPasswordValidation.safeParse(formDataJson);
    if (validate.success === false) {
      console.log(validate.error.flatten().fieldErrors);
      return setValidationMsg(validate.error.flatten().fieldErrors);
    }

    setValidationMsg(null);
    const temp = [...resetPassword];
    temp.push(formDataJson);
    setResetPassword(temp);
    console.log(resetPassword);
  }
  return (
    <div
      className="h-screen  w-screen flex justify-center mt-5 bg-bottom bg-no-repeat bg-[length:100%_200px]"
      style={{ backgroundImage: "url('/assets/bg-regist.jpg')" }}
    >
      <div className="h-[540px] w-[1110px] flex justify-between">
        <div className="h-[540px] w-[580px] relative">
          <Image src={"/assets/ilustrasi-reset.png"} alt="" fill />
        </div>
        <div className="h-[540px] w-[400px] mt-16 ">
          <h1 className="text-4xl mb-4 font-bold w-[450px] ">Reset Password</h1>
          <h2 className="mb-4 text-xs">
            Your new password must be different from previous used passwords.
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <FormInput
              label="Email"
              type="email"
              id="email"
              validation={validationMsg?.email}
              placeholder="Enter Your Email"
            />
            <FormInput
              label="New Password"
              type="password"
              id="resetPassword"
              validation={validationMsg?.resetPassword}
              placeholder="********"
            />
            <FormInput
              label="Confirm New Password"
              type="password"
              id="rePassword"
              validation={validationMsg?.rePassword}
              placeholder="********"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 rounded-md text-white py-[7px] my-[15px] hover:bg-teal-700 transition-colors"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
