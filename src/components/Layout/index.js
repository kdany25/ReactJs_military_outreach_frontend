import React from "react";
import "./Style/layout.css";
import Profile from "./profile";
import SidebarLayout from "./sidebar";

const Layout = ({children}) => {
  return (
      <div className="maincontainer">
    <SidebarLayout/>
    <div className="child">
    <Profile/>
    {children}
    </div>
    </div>

  );
};

export default Layout;
