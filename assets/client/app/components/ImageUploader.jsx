// import axios from "axios";
import { useState, useEffect } from "react";

function ImageUploader() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [msg, setMsg] = useState("");



  useEffect(() => {
    // Reset the form when the page loads
    setSelectedFile(null);
  }, []);

  const onFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  // On click, clear the input value
  const onClick = (e) => {
    e.currentTarget.value = "";
  };

  const handleFile = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      return;
    }

    

    const token = localStorage.getItem("token");

    
    if (!selectedFile){
        setMsg("No File was selected");
        return;
    }

    try {
        setMsg("Uploading...");

        // Create an object of formData
    const formData = new FormData();
 
    // Update the formData object
    formData.append(
        "myFile",
        selectedFile,
        selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);


      const res = await fetch("http://192.168.142.212:3001/api/files/upload", {
        method: "POST",
        body: formData,
        headers: {
          token: token,
        },
      });

      
      
      if(!res.ok) {
        throw new Error(await res.text());
      } else {
        console.log("------back from server:", res);
        setMsg("Uploading complete");

        // Clear the states after upload
        setSelectedFile(null);
      }

    } catch (err) {
      // Handle errors here
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Files Upload</h1>
      <input
        type="file"
        name="myFile"
        onChange={onFileChange} 
        onClick={onClick}
      />
      <button onClick={handleFile}>Upload</button>



      
      {msg && <span>{msg}</span>}
    </div>
  );
}

export default ImageUploader;
