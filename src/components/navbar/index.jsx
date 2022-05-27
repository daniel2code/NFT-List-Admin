import React from "react";
import "./navbar.css";

import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg"
import logo from "../../assets/logo.png";

const Index = () => {
  return (
    <div className="flex justify-between w-full items-center  navbar-container">
      <img src={logo} alt="brand logo" className="nav-logo" />

      <div className="flex items-center gap-5">
        <IoIosNotifications size={30} />
        <CgProfile size={30} />
      </div>
    </div>
  );
};

export default Index;
