"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';


import AssetNavbar from "@/app/components/AssetNavbar";

export default function listAssets() {
  const router = useRouter();
  const [usrassets, setUsrsAssets] = useState([]);



  const getAssets = async (id) => {
    const token = localStorage.getItem("token");
    // console.log("token", token);

    const assets = await fetch("http://192.168.142.212:3001/api/asset/assetsforid/" + id, {
      method: "GET",
      cache: "no-cache",
      headers: {
        token: token,
      },
    }).then((data) => data.json());

    setUsrsAssets(assets);
    return assets;
  };

  // fetch data only once on page load
  // https://www.youtube.com/watch?v=-4XpG5_Lj_o
  useEffect(() => {
    const id = localStorage.getItem("id");
    getAssets(id);
  }, []);


  return (
    <div>
      <AssetNavbar />

      <div>
        {usrassets.message === "Invalid token" ? (
          <h1>{usrassets.message}</h1>
        ) : (
            usrassets.map((item) => {
            return (
              <div key={item._id}>
                <h2>User_id: {item.User_id}</h2>
                <h2>AssignedTo: {item.AssignedTo}</h2>
                <img width={100} height={100} src={`http://192.168.142.212:3001/api/files/image/${item.UploadedFile}`} alt="Image alt text" />;

                <hr />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
