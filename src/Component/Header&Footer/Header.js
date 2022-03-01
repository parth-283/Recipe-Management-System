import React,{useEffect,useState} from "react";
import NavigationBar from "../Home/NavigationBar/NavigationBar";
import {Outlet} from "react-router-dom"
// import HeaderBottom from './HeaderBottom';

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
      //  console.log("useruseru+++++++++++++++++++++++",user);
    }, 100);
  });

  return (
    <div className="" >
      {user &&
      <NavigationBar/>
      }
      
      <Outlet />

    </div>
  );
}                   

export default Header;
