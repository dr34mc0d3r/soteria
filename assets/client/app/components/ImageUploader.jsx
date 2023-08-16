// import axios from "axios";
import { useState, useEffect } from "react";

function ImageUploader(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    // Reset the form when the page loads
    setSelectedFile(null);
    setUploadedFile(null);
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

    setPageError("");

    const token = localStorage.getItem("token");

    if (!selectedFile) {
      setMsg("No File was selected");
      return;
    }


      setMsg("Uploading...");

      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append("myFile", selectedFile, selectedFile.name);

      // Details of the uploaded file
      console.log(selectedFile);

      const res = await fetch("http://192.168.142.212:3001/api/files/upload", {
        method: "POST",
        body: formData,
        headers: {
          token: token,
        },
      })
        .then((response) => {
          // If the HTTP response is 2xx then it response.ok will have a value of true
          if (response.ok) {
            return response.json();
          } else {
            // If the API responds meaningful error message,
            // then you can get it by calling response.statusText
            throw new Error("Sorry something went wrong");
          }
        })
        .then((data) => {
          console.log("data", data);
          
          setMsg("Uploading complete - " + data.data.filePath);
          setUploadedFile(data.data.filePath);
          

          //pass the file back up to the parent controller
          props.sendToParent(data.data);
 
        })
        .catch((error) => {
          // It is always recommended to define the error messages
          // in the client side rather than simply relying on the server messages,
          // since server messages might not make sense to end user most of the time.
          setPageError(error.message);
        });

      
    
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

      <input
            type="hidden"
            name="uploadedFile"
            defaultValue={uploadedFile}
          />
      <button onClick={handleFile}>Upload</button>
      <div className="">
      {pageError && <p>{error}</p>}
      {msg && <span>{msg}</span>}
      </div>

      
    </div>
  );
}

export default ImageUploader;
