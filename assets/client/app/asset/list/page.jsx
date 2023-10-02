"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AssetNavbar from "@/app/components/AssetNavbar";

export default function listAssets() {
  const router = useRouter();
  const [usrassets, setUsrsAssets] = useState([]);

  useEffect(() => {
    // Reset the form when the page loads
    const id = localStorage.getItem("id");
  }, []);

  const getAssets = async () => {
    const token = localStorage.getItem("token");
    // console.log("token", token);

    const users = await fetch(process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT + "/api/asset/assetsforid/?id=${id}", {
      method: "GET",
      cache: "no-cache",
      headers: {
        token: token,
      },
    }).then((data) => data.json());

    setUsrs(users);
    return users;
  };

  // fetch data only once on page load
  // https://www.youtube.com/watch?v=-4XpG5_Lj_o
  useEffect(() => {
    getUsers();
  }, []);

  // console.log("usrs", usrs);

  return (
    <div>
      <AssetNavbar />

      <div>
        {usrs.message === "Invalid token" ? (
          <h1>{usrs.message}</h1>
        ) : (
          usrs.map((usr) => {
            return (
              <div key={usr._id}>
                <h2>username: {usr.username}</h2>
                <h2>email: {usr.email}</h2>

                <hr />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
