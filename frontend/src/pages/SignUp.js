import React from "react";

function SingUp() {
  return (
    <div className="bg-gray-200 ml-[550px] mt-[220px] rounded-lg justify-center py-8 w-96 shadow-xl">
      <form className="grid justify-center">
        <div className="mb-3">
          <label for="text" className="block mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
        <div className="mb-3">
          <label for="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <button className=" bg-blue-500 pl-16 pr-16 rounded-md content-center">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
