'use client'

import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export const AssetNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex mt-2">
      <button className="text-xs bg-gray-300 text-gray-800 py-2 px-8 rounded-l">
        Asset:
      </button>
      <button
        className={`text-xs ${
          pathname === "/asset/new" 
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/asset/new")}
      >
        New
      </button>
      <button
        className={`text-xs ${
          pathname === "/asset/list"
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/asset/list")}
      >
        List
      </button>
      
    </div>
  );
};
