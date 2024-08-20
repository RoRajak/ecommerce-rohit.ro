import React, { useState } from "react";
import { loginSiginIcon } from "../../constants";
import { useNavigate } from "react-router-dom";
interface SignUpProps{
  name:string;
  email:string;
  password:string
}
const SignUp = () => {
  const [data,setData]=useState<SignUpProps>(
    {
      name:"",
      email:"",
      password:""
    }
  )
  const navigate=useNavigate()
  const handleSignUp=(e:React.FormEvent)=>{
    e.preventDefault();
    
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/")
  }
  return (
    <div className="flex min-h-screen bg-peach-100 sm:p-16 min-w-fit relative">
      <div className=" w-full sm:w-[60%] flex items-center justify-center">
        <div className=" p-8 rounded-lg  w-96">
          <h2 className="text-coral-500 mb-4 font-semibold">ROHIT.RO</h2>
          <p className="text-gray-600 mb-6">Hi There!!!</p>
          <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="mb-4 ">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="Name"
                id="Name"
                name="Name"
                value={data.name}
                required
                onChange={(e)=>setData({...data,name:e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none "
                placeholder="Rohit..."
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                required
                onChange={(e)=>setData({...data,email:e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none"
                placeholder="test1@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={data.password}
                onChange={(e)=>setData({...data,password:e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none"
              />
              <a
                href="#"
                className="text-sm text-coral-500 hover:underline float-right mt-1"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-opacity-50"
            >
              SING UP
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            You have account?{" "}
            <a href="/signin" className="text-coral-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <div className="hidden sm:w-[40%] bg-peach-200 sm:flex items-center justify-center bg-[#ffede1]">
        <img
          src={loginSiginIcon}
          alt="Shopping illustration"
          className="max-w-md absolute right-80 bottom-28"
        />
        <span className="block  h-1 bg-[#ffede1] w-[70%] absolute right-48 bottom-28"></span>
      </div>
    </div>
  );
};

export default SignUp;
