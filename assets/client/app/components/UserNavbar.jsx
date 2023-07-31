'use client'

import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export const UserNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex mt-2">
      <button className="text-xs bg-gray-300 text-gray-800 py-2 px-8 rounded-l">
        User:
      </button>
      <button
        className={`text-xs ${
          pathname === "/user/login" 
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/user/login")}
      >
        Login
      </button>
      <button
        className={`text-xs ${
          pathname === "/user/register"
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/user/register")}
      >
        Register
      </button>
      <button
        className={`text-xs ${
          pathname === "/user/listusers"
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/user/listusers")}
      >
        List
      </button>
      <button
        className={`text-xs ${
          pathname === ""
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4 rounded-r`}
      >
        Logout
      </button>
    </div>
  );
};
