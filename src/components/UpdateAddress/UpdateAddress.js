import React, { useState } from "react";
import {instance} from "../../utils/axiosInstance"

function UpdateAddress() {
  const [formData, setformData] = useState({
    address: "",
  });
  const changeValue = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm =async () =>{
    const {address} = formData


      if(!address){
          return alert("address is required")
      }     
      
      instance.put("/test/updateaddress",{
        address
      }).then((res)=>{
        console.log(res.data)

          if(res.data.tokens){
            alert(res.data.msg)
          }
      }).catch((err)=>{
        if(err.response.status === 401){
          alert("password is incorrect")
        }
      })

  }

  return (
    <div>
      <h2>Update Address</h2>
      <input
        placeholder="Enter Address"
        name="address"
        value={formData.address}
        onChange={changeValue}
      /><br/>
       

      <button onClick={submitForm}>Update Address</button>
    </div>
  );
}

export default UpdateAddress;