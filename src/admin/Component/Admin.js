import React from "react";
<<<<<<< HEAD
import AllRecipe from "../AdminPages/AllRecipe";
import UserFeedback from "../AdminPages/UserFeedback";
import UserList from "../AdminPages/UserList";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <>
      <div>
        {/* <AdminHeader /> */}
        <AdminSidebar />
        {/* <AllRecipe />
        <UserList />
        <UserFeedback /> */}
        <Outlet/>
=======
// import Dashboard from "./Dashboard";

function Admin() {
  return (
    <div>
      <div className="container m-2 p-2 ">
        <h1>Admin</h1>
        {/* <Dashboard/> */}
>>>>>>> 961f6a8c293d4b923ca634f0ec6e383b1b889b1c
      </div>
      
    </>
  );
}

export default Admin;
