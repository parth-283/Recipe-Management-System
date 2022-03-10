import { Route, Routes, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header&Footer/Header";
// import Error404 from "./Component/Error404/Error404";
import SignIn from "./Component/SignUp&SignIn/SignIn";
import SignUp from "./Component/SignUp&SignIn/SignUp";

import Breakfast from "./Recipes/Category/Breakfast";
import Lunch from "./Recipes/Category/Lunch";
import Dinner from "./Recipes/Category/Dinner";
import Dessert from "./Recipes/Category/Dessert";
import FeedBack from "./Component/FeedBack/FeedBack";

import Admin from "./admin/Component/Admin";
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
  );
}

export default App;
