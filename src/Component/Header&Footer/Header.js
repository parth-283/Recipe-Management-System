import React, { useEffect, useState } from "react";
import NavigationBar from "../Home/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      let userdata = localStorage.getItem("login");
      if (userdata == "true") {
        setUser(false);
      } else {
        setUser(true);
      }
    }, 100);
  });

  return (
    <div className="">
      {user && <NavigationBar />}

      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
