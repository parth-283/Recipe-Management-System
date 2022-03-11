import React from "react";
import AllRecipe from "../AdminPages/AllRecipe";
import UserFeedback from "../AdminPages/UserFeedback";
import UserList from "../AdminPages/UserList";
import AdminHeader from './AdminHeader';
import AdminSidebar from "./AdminSidebar";

function Admin() {
  return (
    <>
 <AdminHeader />
 <AdminSidebar />
 {/* <AllRecipe />
 <UserList/>
 <UserFeedback /> */}
   
  </>

  );
}

export default Admin;
