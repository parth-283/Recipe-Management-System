import React from "react";
import NavigationBar from "../Home/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Header() {
 

  return (
    <div className="">
     <NavigationBar />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
