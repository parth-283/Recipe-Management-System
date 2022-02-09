import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Outlet} from "react-router-dom"
// import HeaderBottom from './HeaderBottom';

function Header() {
  return (
    <div className=" ">
      <NavigationBar/>
      
      <Outlet />

    </div>
  );
}                   

export default Header;
