import React, { useContext, useEffect, useState } from 'react'

import toast from "react-hot-toast"

import axios from "axios"
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const navigateTo = useNavigate();

    const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);



  const handleLogin=async(e)=>{
    e.preventDefault();

    try {

      const {data}=await axios.post("http://localhost:4000/api/v1/user/login",{email,password},
        {withCredentials:true,headers:{'Content-Type':"application/json"}}
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }

 

  }


  useEffect(()=>{
    if(isAuthenticated){
      navigateTo("/")
    }
  },[isAuthenticated])
  
  return (
    <>
    <section className='auth'>
          <form onSubmit={handleLogin}>

          
          <h3>LOGIN</h3>

            <div>
                <label>Your Email</label>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>


            <div>
                <label>Your password</label>
                <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>

            <button type='submit'>Login</button>

          </form>

    </section>
    </>
  )
}

export default Login
