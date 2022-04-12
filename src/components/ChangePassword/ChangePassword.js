import React, { useState } from "react";
import {instance} from "../../utils/axiosInstance"

function ChangePassword() {
  const [formData, setformData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const changeValue = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm =async () =>{
    const {oldPassword, newPassword} = formData


      if(!oldPassword){
          return alert("old password is required")
      }

      if(!newPassword){
        return alert("new Password is required")
    }
     
      
      instance.put("/test/changepassword",{
        oldPassword, newPassword
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
      <h2>Change password</h2>
      <input
        placeholder="Enter old password"
        name="oldPassword"
        value={formData.oldPassword}
        onChange={changeValue}
      /><br/>
       <input
        placeholder="Enter New Password"
        name="newPassword"
        value={formData.newPassword}
        onChange={changeValue}
      /><br/>
     

      <button onClick={submitForm}>change password</button>
    </div>
  );
}

export default ChangePassword;