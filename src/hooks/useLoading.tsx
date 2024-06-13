import React, { useState } from "react";

export default function useLoading() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function showLoading(status: boolean, msg: string | null) {
    setToggle(status);
    setMessage(msg);
  }

  function Loading() {
    if (!toggle) return null;
    return (
      <div className="absolute top-0 left-0 flex justify-center w-full items-center">
        <div className="bg-blue-500 w-fit mt-5 px-7 py-3 rounded-lg text-white flex items-center gap-2">
          <div className="w-5 h-5 border-[3px] rounded-full border-t-[3px] border-t-blue-300 animate-spin" />
          {message}
        </div>
      </div>
    );
  }

  return { showLoading, Loading };
}
