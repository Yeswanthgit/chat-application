import React from "react";
import Image1 from "../assets/photo1.avif";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-24">
      <div>Blogit</div>
      <div className="flex space-x-2">
        <img
          src={Image1}
          alt="profile-pic"
          className="rounded-full w-10 h-10"
        />
        <button type="button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
