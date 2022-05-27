import React from "react";
import "./wrapper.css";

import NavBar from "../navbar/index";
import SideBar from "../sidebar/index";

const Index = ({ children }) => {
  return (
    <div className="wrapper-box">
      <div className="wrapper-nav">
        <NavBar />
      </div>

      <div className="wrapper-body">
        <div className="wrapper-sidebar">
          <SideBar />
        </div>

        <div className="wrapper-content">{children}</div>
      </div>
    </div>
  );
};

export default Index;
