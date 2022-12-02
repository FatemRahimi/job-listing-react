import React from "react";
import logo from "../image/Airbnb.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="airbnb logo" className="logo" />
    </nav>
  );
};

export default Navbar;