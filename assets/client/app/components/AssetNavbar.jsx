'use client'

import { useRouter, usePathname, useParams } from "next/navigation";

// import { useEffect, useState } from "react";

function AssetNavbar() {

  const router = useRouter();
  const pathname = usePathname();
  const param1 = useParams();

  const id = localStorage.getItem("id");




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
          param1.Id === id 
            ? "bg-gray-800 text-white hover:bg-gray-400"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } py-2 px-4`}
        onClick={() => router.push("/asset/list/" + id)}
      >
        List
      </button>
      
    </div>
  );
};

export default AssetNavbar;

