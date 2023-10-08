import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-teal-200 w-screen h-screen flex items-center justify-center">
      <div className="bg-purple-500 w-1/2 flex h-2/3 rounded-md overflow-hidden shadow-2xl bg-gradient-to-tl from-violet-500 to-70%">
        <div className="w-1/3 h-16 p-3 rounded-tr-md bg-indigo-400 ">
          <Navbar />
        </div>
        <div className="p-3 w-2/3">
          Grid
        </div>
      </div>
    </div>
  );
};

export default Home;