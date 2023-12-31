"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import AssetNavbar from "@/app/components/AssetNavbar";
import ImageUploader from '@/app/components/ImageUploader';
import dataArrays from "../dataArrays";




export default function NewAsset() {

  // https://reactdatepicker.com/

  const router = useRouter();

  // tunnel data to and from child component
  // https://www.c-sharpcorner.com/article/how-to-pass-data-from-child-to-parent-component-in-react/
  const getChildData=(val) =>{
    console.log("data from child component:", val);
    setNewAsset({ ...newasset, UploadedFile: val.generatename });
  }

  const [newasset, setNewAsset] = useState({
    User_id: "",
    Cat_id: 0,
    AssignedTo: "",
    Condition: "",
    PurchaseDate: "",
    DesolveDate: "",
    SerialNumber: "",
    Details: "",
    ExpireDate: "",
    UploadedFile: ""
  });

  useEffect(() => {
    // Reset the form when the page loads
    setNewAsset({
      User_id: localStorage.getItem("id"),
      Cat_id: 0,
      AssignedTo: "",
      Condition: "",
      PurchaseDate: "",
      DesolveDate: "",
      SerialNumber: "",
      Details: "",
      ExpireDate: "",
      UploadedFile: ""
    });
  }, []);



  const onSubmit = async (e) => {
    e.preventDefault();

    if (newasset.Cat_id == 0) {
      return alert("Must assign an asset item type");
    }

    const token = localStorage.getItem("token");

    const myresponse = await fetch(process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT + "/api/asset/create", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newasset),
    }
    ).then(res => res.json()).then(data => {

      console.log('----------NEW ASSET: ', data);



      // route to the users list page
      router.push('/asset/list/' + newasset.User_id);
    });


  };



  return (
    <>

      <AssetNavbar />



      <form
        method="POST" encType="multipart/form-data"
        onSubmit={onSubmit}
        className=""
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="">

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


          <div className="">

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








        <ImageUploader sendToParent={getChildData} />







        <div className="mt-1 mr-0 mb-3 ml-0">
          <button type="submit" className="w-full flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Add this Asset</button>
        </div>



      </form >



    </>
  );
}
