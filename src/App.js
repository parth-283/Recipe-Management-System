import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header&Footer/Header";
import SignIn from "./Component/SignUp&SignIn/SignIn";
import SignUp from "./Component/SignUp&SignIn/SignUp";

import Breakfast from "./Recipes/Category/Breakfast";
import Lunch from "./Recipes/Category/Lunch";
import Dinner from "./Recipes/Category/Dinner";
import Dessert from "./Recipes/Category/Dessert";
import FeedBack from "./Component/FeedBack/FeedBack";

import RecipeForm from "./Recipes/RecipeForm";
import ShowRecipe from "./Recipes/ShowRecipe";

import Admin from "./admin/Component/Admin";
import AllRecipe from "./admin/AdminPages/AllRecipe";
import UserList from "./admin/AdminPages/UserList";
import UserFeedback from "./admin/AdminPages/UserFeedback";
import BlockList from "./admin/AdminPages/BlockList";
import UserRecipe from "./Recipes/UserRecipe/UserRecipe";
import Error404 from "./Component/Error404/Error404";
import Forgot from './Component/SignUp&SignIn/Forgot';

function App() {
  let reg = localStorage.getItem("user-info");
  let regdata = JSON.parse(reg);
  let emailreg = regdata[0].regdata.email;
  let passwordreg = regdata[0].regdata.password;

  let login = localStorage.getItem("login-info");
  let logindata = JSON.parse(login);
  let emaillogin = logindata[0].logindata.email;
  let passwordlogin = logindata[0].logindata.password;

  console.log("emaillogin", emaillogin);
  console.log("passwordlogin", passwordlogin);

  var isloggedin;
  if (emailreg === emaillogin && passwordreg === passwordlogin) {
    isloggedin = true;
  } else {
    isloggedin = false;
  }

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
          <Route path="/userrecipe" element={<UserRecipe />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/forgot" element={<Forgot />} />
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
          <Route path="/admin/allrecipe" element={<AllRecipe />} />
          <Route path="/admin/UserList" element={<UserList />} />
          <Route path="/admin/userfeedback" element={<UserFeedback />} />
          {/* <Route path="/admin/blocklist" element={<BlockList />} /> */}
        </Route>
          {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>

    </div>
  );
}

export default App;
