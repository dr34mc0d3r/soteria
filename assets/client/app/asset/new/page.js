"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { AssetNavbar } from "@/app/components/AssetNavbar";




export default function NewAsset() {



  const router = useRouter();

  const [newasset, setNewAsset] = useState({
    item_id: "",
        assignedTo: "",
        Condition: "",
        PurchaseDate: "",
        DesolveDate: "",
        SerialNumber: "",
        Details: "",
        ExpireDate: ""
  });
  const [asset, setAsset] = useState()

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newasset.item_id === "") {
      return alert("Must assign an asset item type");
    }


    const myresponse = await fetch("http://192.168.142.212:3001/api/asset/create", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newasset),
    }
    ).then(res => res.json()).then(data => {

      console.log('----------NEW ASSET: ', data);


      setAsset(data.asset);


      // route to the home page
      router.push('/asset/list');
    });


  };

  return (
    <div>

<AssetNavbar/>

      <form
        onSubmit={onSubmit}
        className="fflex flex-col bg-white rounded shadow-lg p-12 mt-12"
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => {
          setNewUser({ ...newuser, username: event.target.value });
        }} />

<label className="font-semibold text-xs" htmlFor="emailField">Email</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => {
          setNewUser({ ...newuser, email: event.target.value });
        }} />

          <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
          <input onChange={() => {
            setNewUser({ ...newuser, password: event.target.value });
          }} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>




      </form>

    </div>
  );
}
