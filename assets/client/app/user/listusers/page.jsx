"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import UserNavbar from "@/app/components/UserNavbar";

export default function listUsers() {
  const router = useRouter();
  const [usrs, setUsrs] = useState([]);

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    // console.log("token", token);

    const users = await fetch(process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT + "/api/auth/users", {
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
      <UserNavbar />

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
