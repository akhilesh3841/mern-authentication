import React, { useContext, useEffect, useState } from 'react'

import toast from "react-hot-toast"

import axios from "axios"
import { Context } from '../main'
import { useNavigate } from 'react-router-dom'

const Register = () => {



    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");



    const {isAuthenticated}=useContext(Context);

  const handleRegister=async(e)=>{
    e.preventDefault();

    try {

      const {data}=await axios.post("http://localhost:4000/api/v1/user/register",{name,email,phone,password},
        {withCredentials:true,headers:{'Content-Type':"application/json"}}
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }

    const navigateTo=useNavigate()


   useEffect(()=>{

     if(isAuthenticated){
       navigateTo("/")
     }

   },[isAuthenticated])
  }

  return (
    <>
    <section className='auth'>
          <form onSubmit={handleRegister}>
            <h3>Register</h3>
            <div>
                <label>Your Name</label>
                <input type='name' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required></input>
            </div>


            <div>
                <label>Your Email</label>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>



            <div>
                <label>Your Phone Number</label>
                <input type='phone' placeholder='Enter your Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
            </div>


            <div>
                <label>Your password</label>
                <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>

            <button type='submit'>Register</button>

          </form>

    </section>
    </>
  )
}

export default Register
