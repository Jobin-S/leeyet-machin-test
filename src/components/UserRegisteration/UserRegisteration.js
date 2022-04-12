import React, { useState } from "react";
import {validateEmail, validatePhonenumber} from "../../utils"
import axios from "axios";

function UserRegisteration() {
  const [formData, setformData] = useState({
    emailorphonenumber: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const changeValue = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm =async () =>{
    const {emailorphonenumber, password, firstName, lastName} = formData

      if(!(validateEmail(emailorphonenumber) || validatePhonenumber(emailorphonenumber))){
          return alert(`${emailorphonenumber} is not Email or Phone Number type`)
      }
      if(!password){
          return alert("password is required")
      }
      if(!firstName){
        return alert("first name is required")
      }
      if(!lastName){
        return alert("last name is required")
      }
      
      axios.post("https://api.oopacks.com/api/test/register",{
          emailorphonenumber, password, firstName, lastName
      }).then((res)=>{
          if(res.data.token){
            localStorage.setItem("token", res.data.token);
            alert("You have registered successfuly")
          }
      }).catch((err)=>{
        alert(err.response.data.msg)
      })

  }

  return (
    <div>
      <h2>User Registeration</h2>
      <input
        placeholder="Enter Email or phoneNumber"
        name="emailorphonenumber"
        value={formData.emailorphonenumber}
        onChange={changeValue}
      /><br/>
       <input
        placeholder="Enter Password"
        name="password"
        value={formData.password}
        onChange={changeValue}
      /><br/>
      <input
        placeholder="Enter firstname"
        name="firstName"
        value={formData.firstName}
        onChange={changeValue}
      /><br/>
      <input
        placeholder="Enter lastname"
        name="lastName"
        value={formData.lastName}
        onChange={changeValue}
      /><br/>

      <button onClick={submitForm}>Register</button>
    </div>
  );
}

export default UserRegisteration;
