"use client"

import { useState, useReducer } from "react";
import { useRouter } from 'next/navigation';
import UserNavbar from "@/app/components/UserNavbar";
import reducerOne from '@/app/user/reducer';




export default function UserLogin() {

const appSubSection = "login";

  const router = useRouter();

  const [newuser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState();

  const [authenticated, dispatch] = useReducer(reducerOne, {});

  const onSubmit = async (e) => {
    e.preventDefault();

    if (newuser.username === "" || newuser.password === "")
      return alert("Cant pass empty fields");


    const myresponse = await fetch(process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT + "/api/auth/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    }
    ).then(res => res.json()).then(data => {

      // https://articles.wesionary.team/securing-sensitive-data-in-a-next-js-application-d7d5cce67f23
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      dispatch({ type: "login" });

      setUser(data.user);


      // route to the home page
      router.push('/user/listusers');
    });


  };



  return (
    <div className="container">

      <UserNavbar/>

      <form onSubmit={onSubmit} className="">
        <label className="font-semibold text-xs" htmlFor="usernameField">Username or Email</label>
        <input required id="usernameField" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => {
          setNewUser({ ...newuser, username: event.target.value });
        }} />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
        <input required id="passwordField" onChange={() => {
          setNewUser({ ...newuser, password: event.target.value });
        }} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
        <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>



      </form>

    </div>
  );
}
