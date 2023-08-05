"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { UserNavbar } from "@/app/components/UserNavbar";




export default function UserRegister() {



  const router = useRouter();

  const [newuser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState()

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newuser.username === "" || newuser.email === "" || newuser.password === "")
      return alert("Cant pass empty fields");


    const myresponse = await fetch("http://192.168.142.212:3001/api/auth/register", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    }
    ).then(res => res.json()).then(data => {

      console.log('----------REGISTER: ', data);


      // setUser(data.user);


      // route to the home page
      router.push('/user/login');
    });


  };

  return (
    <div>

<UserNavbar/>

      <form
        onSubmit={onSubmit}
        className="fflex flex-col bg-white rounded shadow-lg p-12 mt-12"
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
        <input required id="usernameField" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => {
          setNewUser({ ...newuser, username: event.target.value });
        }} />

<label className="font-semibold text-xs" htmlFor="emailField">Email</label>
        <input required id="emailField" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => {
          setNewUser({ ...newuser, email: event.target.value });
        }} />

          <label required className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
          <input id="passwordField" onChange={() => {
            setNewUser({ ...newuser, password: event.target.value });
          }} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
            <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>




      </form>

    </div>
  );
}
