import React from "react";

import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin/index";
import Dashboard from "../pages/dashboard/index";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path={"/dashboard/*"} element={<Dashboard />} />
    </Routes>
  );
};

export default Index;
