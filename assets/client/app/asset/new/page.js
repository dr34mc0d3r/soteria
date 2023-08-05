"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { AssetNavbar } from "@/app/components/AssetNavbar";
import dataArrays from "../dataArrays";




export default function NewAsset() {

  // https://reactdatepicker.com/

  const router = useRouter();

  const [newasset, setNewAsset] = useState({
    Cat_id: 0,
    AssignedTo: "",
    Condition: "",
    PurchaseDate: "",
    DesolveDate: "",
    SerialNumber: "",
    Details: "",
    ExpireDate: ""
  });

  useEffect(() => {
    // Reset the form when the page loads
    setNewAsset({
      Cat_id: 0,
      AssignedTo: "",
      Condition: "",
      PurchaseDate: "",
      DesolveDate: "",
      SerialNumber: "",
      Details: "",
      ExpireDate: ""
    });
  }, []);

  console.log("newasset: ", newasset);


  const onSubmit = async (e) => {
    e.preventDefault();
    alert(newasset.Cat_id);
    if (newasset.Cat_id == 0) {
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



      // route to the home page
      router.push('/asset/list');
    });


  };



  return (
    <>

      <AssetNavbar />

      <form
        onSubmit={onSubmit}
        className=""
      >

        <div class="container px-5 py-5 mx-auto flex flex-wrap">

          <div class="h-full p-4 lg:w-1/2">

            <label className="block text-sm font-medium text-gray-700" htmlFor="itemCategory">Category</label>

            <div className="mt-1 mr-0 mb-3 ml-0">

              <select id="itemCategory"
                value={newasset.Cat_id}
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1" onChange={(event) => {
                  setNewAsset({ ...newasset, Cat_id: event.target.value });
                }}>


                {dataArrays.itemCategories.map((option, index) => {
                  return (
                    <option key={"cat_id_" + option.cat_id} value={option.cat_id} >
                      {option.title}
                    </option>
                  );
                })}


              </select>

            </div>

            <label className="block text-sm font-medium text-gray-700" htmlFor="AssignedToField">Assigned To</label>

            <div className="mt-1 mr-0 mb-3 ml-0">


              <input
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1"
                type="text"
                id="AssignedToField"
                name="AssignedTo"
                value={newasset.AssignedTo}
                onChange={(event) => {
                  setNewAsset({ ...newasset, AssignedTo: event.target.value });
                }}
              />

            </div>

            <label className="block text-sm font-medium text-gray-700" htmlFor="ConditionField">Condition</label>
            <div className="mt-1 mr-0 mb-3 ml-0">

              <textarea value={newasset.Condition} name="Condition" id="ConditionField" rows="4" className="w-full resize rounded-md border border-neutral-200 bg-neutral-50 p-1" placeholder="" onChange={(event) => {
                setNewAsset({ ...newasset, Condition: event.target.value });
              }}></textarea>
            </div>


            <label className="block text-sm font-medium text-gray-700" htmlFor="PurchaseDateField">Purchase Date</label>
            <div className="mt-1 mr-0 mb-3 ml-0">

              <input
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1"
                type="text"
                id="PurchaseDateField"
                name="PurchaseDate"
                value={newasset.PurchaseDate}
                placeholder="mm/dd/yy" onChange={(event) => {
                  setNewAsset({ ...newasset, PurchaseDate: event.target.value });
                }}
              />
            </div>


          </div>


          <div class="h-full p-4 lg:w-1/2">

            <label className="block text-sm font-medium text-gray-700" htmlFor="DesolveDateField">Desolve Date</label>
            <div className="mt-1 mr-0 mb-3 ml-0">
              <input
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1"
                type="text"
                id="DesolveDateField"
                name="DesolveDate"
                value={newasset.DesolveDate}
                placeholder="mm/dd/yy" onChange={(event) => {
                  setNewAsset({ ...newasset, DesolveDate: event.target.value });
                }}
              />
            </div>

            <label className="block text-sm font-medium text-gray-700" htmlFor="SerialNumberField">Serial Number</label>
            <div className="mt-1 mr-0 mb-3 ml-0">


              <input
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1"
                type="text"
                id="SerialNumberField"
                name="SerialNumber"
                value={newasset.SerialNumber}
                onChange={(event) => {
                  setNewAsset({ ...newasset, SerialNumber: event.target.value });
                }}
              />

            </div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="DetailsField">Details</label>
            <div className="mt-1 mr-0 mb-3 ml-0">

              <textarea value={newasset.Details} name="Details" id="DetailsField" rows="4" className="w-full resize rounded-md border border-neutral-200 bg-neutral-50 p-1" placeholder="" onChange={(event) => {
                setNewAsset({ ...newasset, Details: event.target.value });
              }}></textarea>
            </div>

            <label className="block text-sm font-medium text-gray-700" htmlFor="ExpireDateField">Expire Date</label>
            <div className="mt-1 mr-0 mb-3 ml-0">

              <input
                className="w-full rounded border border-neutral-200 bg-neutral-50 p-1"
                type="text"
                id="ExpireDateField"
                name="ExpireDate"
                value={newasset.ExpireDate}
                placeholder="mm/dd/yy" onChange={(event) => {
                  setNewAsset({ ...newasset, ExpireDate: event.target.value });
                }}
              />
            </div>

          </div>

        </div>

        <div className="mt-1 mr-0 mb-3 ml-0">
          <button type="submit" className="w-full flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>
        </div>



      </form >



    </>
  );
}
