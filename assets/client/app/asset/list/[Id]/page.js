"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import Image from 'next/image';
import Link from "next/link";


import AssetNavbar from "@/app/components/AssetNavbar";

export default function listAssets() {
  const router = useRouter();
  const [usrassets, setUsrsAssets] = useState([]);
  const [fetcherror, setFetchError] = useState("");



  const getAssets = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://192.168.142.212:3001/api/asset/assetsforid/" + id, {
        method: "GET",
        cache: "no-cache",
        headers: {
          token: token,
        },
      });

      if (!response.ok) {
        setFetchError(response.statusText);
        throw new Error(`HTTP error! status: ${response}`);
      }

      // done with response headers - convert returned data to json
      const data = await response.json();

      if (data.length == 0) {
        setFetchError("No assets to list");
      }

      setUsrsAssets(data);


      // return response;

    } catch (error) {
      console.error(error);
    }

  };

  const deleteThisAsset = async (assetId) => {

    if (window.confirm("Are you sure you wish to delete this asset?")) {


      const token = localStorage.getItem("token");

      try {

        const assetDeleteResponse = await fetch("http://192.168.142.212:3001/api/asset/delete/" + assetId, {
          method: "DELETE",
          cache: "no-cache",
          headers: {
            token: token,
          },
        });

        console.log("assetDeleteResponse...", assetDeleteResponse);
        if (!assetDeleteResponse.ok) {
          setFetchError(assets.message);
          throw new Error(`HTTP error! status: ${assetDeleteResponse}`);
        }

        setFetchError("Asset deleted");
        // done with response headers - convert returned data to json
        const data = await assetDeleteResponse.json();

        if (data.result) {
          console.log("Refreshing list...");
          const id = localStorage.getItem("id");
          getAssets(id);
        }


      } catch (error) {
        console.error("failed to delete", error);
      }



    }



  }

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
        {
          fetcherror ? (
            <h1>{fetcherror}</h1>
          ) : (
            usrassets.map((item) => {
              return (
                <div key={item._id}>
                  <h2>User_id: {item.User_id}</h2>
                  <h2>AssignedTo: {item.AssignedTo}</h2>
                  <img width={100} height={100} src={`http://192.168.142.212:3001/api/files/image/${item.UploadedFile}`} alt="Image alt text" /><br />

                  <Link href="/asset/edit" className="text-gray-800 hover:text-white duration-500">
                    Asset
                  </Link> |
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => deleteThisAsset(item._id)}
                  >
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })
          )}
      </div>
    </div>
  );
}
