"use client";

import Image from "next/image";
import useLogin from "../hooks/useLogin";

const Page = () => {
  const login = useLogin();

  return (
    <div className="flex flex-col justify-center items-center gap-12 h-screen">
      <Image src="/logo.svg" alt="" width={150} height={150} />
      <div
        className="flex justify-center items-center gap-4 py-4 px-8 border border-[#017EFC] rounded-full cursor-pointer"
        onClick={login}
      >
        <Image src="/metamask.svg" alt="" width={50} height={50} />
        <h2 className="text-xl">Login with MetaMask</h2>
      </div>
    </div>
  );
};

export default Page;
