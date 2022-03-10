<<<<<<< HEAD
import { Navigate, Route, Routes, useLocation } from "react-router";
import { useEffect, useState } from "react";
=======
import { Route, Routes, useNavigate } from "react-router";
>>>>>>> 961f6a8c293d4b923ca634f0ec6e383b1b889b1c
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header&Footer/Header";
<<<<<<< HEAD
import Footer from "./Component/Header&Footer/Footer";
import Error404 from "./Component/Error404/Error404";
=======
// import Error404 from "./Component/Error404/Error404";
>>>>>>> 961f6a8c293d4b923ca634f0ec6e383b1b889b1c
import SignIn from "./Component/SignUp&SignIn/SignIn";
import SignUp from "./Component/SignUp&SignIn/SignUp";

import Breakfast from "./Recipes/Category/Breakfast";
import Lunch from "./Recipes/Category/Lunch";
import Dinner from "./Recipes/Category/Dinner";
import Dessert from "./Recipes/Category/Dessert";
import FeedBack from "./Component/FeedBack/FeedBack";

import Admin from "./admin/Component/Admin";
<<<<<<< HEAD
// import RecipeForm from "./Recipes/RecipeForm";
import NavigationBar from "./Component/Home/NavigationBar/NavigationBar";
import AllRecipe from "./admin/AdminPages/AllRecipe";
import UserList from "./admin/AdminPages/UserList";
import UserFeedback from "./admin/AdminPages/UserFeedback";
import BlockList from './admin/AdminPages/BlockList';

function App() {
  const location = useLocation();
  return (
    <>
      <div>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/Breakfast" element={<Breakfast />} />
            <Route path="/Lunch" element={<Lunch />} />
            <Route path="/Dinner" element={<Dinner />} />
            <Route path="/Dessert" element={<Dessert />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/SignUp" element={<SignUp />} />

            <Route path="/SignIn" element={<SignIn />} />

            <Route path="/SignIn" element={<NavigationBar />} />
          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/allrecipe" element={<AllRecipe />} />
            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/userfeedback" element={<UserFeedback />} />
            <Route path="/admin/blocklist" element={<BlockList />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>

        {/* <Footer /> */}
      </div>
      {/* {location.pathname !== "/admin" &&
        location.pathname !== "/admin/allrecipe" &&
        location.pathname !== "/admin/userlist" &&
        location.pathname !== "/admin/userfeedback" && location.pathname !== "*" && <Footer />} */}
    </>
=======
import RecipeForm from "./Recipes/RecipeForm";
import ShowRecipe from "./Recipes/ShowRecipe";
import RecipeFormMUI from "./Recipes/RecipeFormMUI";

function App() {
  let reg = localStorage.getItem("user-info");
  let regdata = JSON.parse(reg);
  let emailreg = regdata[0].regdata.email;
  let passwordreg = regdata[0].regdata.password;

  let login = localStorage.getItem("login-info");
  let logindata = JSON.parse(login);
  let emaillogin = logindata[0].logindata.email;
  let passwordlogin = logindata[0].logindata.password;

  // console.log("emailreg", emailreg);
  // console.log("passwordreg", passwordreg);
  console.log("emaillogin", emaillogin);
  console.log("passwordlogin", passwordlogin);

  var isloggedin;
  if (emailreg === emaillogin && passwordreg === passwordlogin) {
    isloggedin = true;
  } else {
    isloggedin = false;
  }
 

  // console.log("isloggedin===============",isloggedin);

  return (
    <div style={{ backgroundColor: "#bddaf2" }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
          <Route path="/Dessert" element={<Dessert />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipeformmui" element={<RecipeFormMUI />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          {!isloggedin ? (
            <Route path="/showrecipe" element={<ShowRecipe />} />
          ) : (
            <Route path="/recipeform" element={<RecipeForm />} />
          )}

          <Route
            path="*"
            element={!isloggedin ? <RecipeForm /> : <ShowRecipe />}
          />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
>>>>>>> 961f6a8c293d4b923ca634f0ec6e383b1b889b1c
  );
}

export default App;
