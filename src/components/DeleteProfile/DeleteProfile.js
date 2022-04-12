import React from "react";
import {instance} from "../../utils/axiosInstance"

function DeleteProfile() {

  const DeleteFunction = ()=>{
    instance.delete("/test")
    .then((res)=>{
     
          alert("user deleted succesfully")
    }).catch((err)=>{
      if(err.response.status === 404){
        alert("User not found")
      }
    })
  }
  return (
    <>
      <h1>Delete user profile</h1>
      <button onClick={DeleteFunction}>Delete my account</button>
    </>
  );
}

export default DeleteProfile;
