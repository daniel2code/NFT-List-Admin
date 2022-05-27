import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BsBullseye } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

const Index = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-box">
        <ul>
          <li className="flex items-center mt-5 gap-x-4 sidebar-list-item">
            <FiHome color="#fff" size={20} />
            <Link to="/dashboard">
              <p className="text-base text-white">Home</p>
            </Link>
          </li>

          <li className="flex items-center mt-9 gap-x-4 sidebar-list-item">
            <BsBullseye color="#fff" size={20} />
            <Link to="/dashboard/pending">
              <p className="text-base text-white">Pending Approval</p>
            </Link>
          </li>

          <li className="flex items-center mt-9 gap-x-4 sidebar-list-item">
            <IoIosSettings color="#fff" size={20} />
            <Link to="/dashboard/reports">
              <p className="text-base text-white">Reports/Issues</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
