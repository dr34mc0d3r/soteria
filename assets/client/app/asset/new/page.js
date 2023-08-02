"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { AssetNavbar } from "@/app/components/AssetNavbar";
import dataArrays from "../dataArrays";




export default function NewAsset() {



  const router = useRouter();

  const [newasset, setNewAsset] = useState({
    cat_id: "",
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
    if (newasset.cat_id === "") {
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

      <AssetNavbar />

      <form
        onSubmit={onSubmit}
        className="fflex flex-col bg-white rounded shadow-lg p-12 mt-12"
      >
        <label className="font-semibold text-xs" htmlFor="itemCategory">Category</label>
        <select id="itemCategory"
          value=""
          className="" onChange={() => {
            setNewUser({ newasset, cat_id: event.target.value });
          }}>


          {dataArrays.itemCategories.map((option, index) => {
            return <option key={option.cat_id} >
              {option.title}
            </option>
          })}


        </select>

        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>




      </form>



    </div>
  );
}
