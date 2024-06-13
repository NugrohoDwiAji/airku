import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";

type PropsType = {
  label: string;
  id: string;
  type: string;
  value?: string;
  placeholder: string;
  validation?: string;
};
export default function FormInput(props: PropsType) {
  return (
    <div className="relative">
      <label htmlFor="" className="text-neutral-950">
        {props.label}
      </label>
      <div>
        <input
          type={props.type}
          name={props.id}
          defaultValue={props.value}
          placeholder={props.validation ? props.validation : props.placeholder}
          className={`border-2 mt-1.5 p-2 w-full rounded-lg focus:outline-none ${
            props.validation ? "border-red-500" : ""
          }`}
        />
      </div>
      <PiWarningCircleLight className="absolute right-2 top-[52px] transform -translate-y-1/2 text-stone-400" />
    </div>
  );
}
