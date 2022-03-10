import React from "react";
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
      </div>
      
    </>
  );
}

export default Admin;
