import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="bg-slate-500 h-80 w-80 rounded-xl flex flex-col gap-3 lg:w-96 lg:h-96">
          <img
            src="./src/assets/Naruto.png"
            alt="Logo"
            className="h-20 w-32 mx-auto mt-3 lg:mt-10"
          />
          <h1 className="text-2xl text-black font-bold italic mx-auto -tracking-tight">
            Login
          </h1>
          <div className="flex gap-2 mx-auto mt-5">
            <p className="text-black italic ">Username</p>
            <span className="text-black">:</span>
            <input
              type="text"
              className="bg-white rounded-md text-black pl-2 w-48"
            />
          </div>
          <div className="flex gap-2 mx-auto">
            <p className="text-black italic ">Password</p>
            <span className="text-black">:</span>
            <input
              type="Password"
              className="bg-white rounded-md text-black pl-2 w-48"
            />
          </div>
          <button className="btn w-24 mx-auto mt-3 lg:mt-8 bg-blue-400 text-gray-800 border-none hover:bg-yellow-400 italic ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
