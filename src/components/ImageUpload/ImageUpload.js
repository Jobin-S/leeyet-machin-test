import React, { useState } from "react";
import {instance} from "../../utils/axiosInstance"

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const submitForm =async () =>{
    
    
    if(!selectedFile){
      return alert("file is required")
    }     
    
    const formData = new FormData();
    formData.append("files", selectedFile);
      instance({
        method:"put",
        url: "/test/upload",
        data: formData,
        headers: { "content-type": "multipart/form-data" }
      }).then((res)=>{
        console.log(res.data)

          if(res.data.tokens){
            alert(res.data.msg)
          }
      }).catch((err)=>{
        if(err.response.status === 401){
          alert("issue with image upload")
        }
      })

  }

  return (
    <div>
      <h2>Upload image</h2>
      <input
      type="file"
        name="files"
        onChange={handleFileSelect}
        accept="image/png"
      /><br/>
       

      <button onClick={submitForm}>upload image</button>
    </div>
  );
}

export default ImageUpload;