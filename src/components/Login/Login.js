import React, { useState } from "react";
import {validateEmail, validatePhonenumber} from "../../utils"
import axios from "axios";

function Login() {
  const [formData, setformData] = useState({
    emailorphonenumber: "",
    password: "",
  });
  const changeValue = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm =async () =>{
    const {emailorphonenumber, password} = formData

      if(!(validateEmail(emailorphonenumber) || validatePhonenumber(emailorphonenumber))){
          return alert(`${emailorphonenumber} is not Email or Phone Number type`)
      }
      if(!password){
          return alert("password is required")
      }
     
      
      axios.post("https://api.oopacks.com/api/test/login",{
          emailorphonenumber, password
      }).then((res)=>{
          if(res.data.tokens){
            localStorage.setItem("token", res.data.tokens);
            alert("You have Logined successfuly")
          }
      }).catch((err)=>{
        if(err.response.status === 401){
          alert("password is incorrect")
        }
      })

  }

  return (
    <div>
      <h2>User Login</h2>
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
     

      <button onClick={submitForm}>Login</button>
    </div>
  );
}

export default Login;

