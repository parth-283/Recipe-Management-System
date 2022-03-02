import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header&Footer/Header";
import Footer from "./Component/Header&Footer/Footer";
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
import NavigationBar from "./Component/Home/NavigationBar/NavigationBar";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const user1 = localStorage.setItem("login", user);
    user1 ? setUser(true) : setUser(false);
  }, []);
  useEffect(() => {
    localStorage.setItem("login", user);
  }, [user]);

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

          <Route path="/SignUp" element={<SignUp />} />
          {console.log("+++++++++++++++++useruseruser", user)}
          {!user && (
            <Route
              path="/SignIn"
              element={<SignIn auth={() => setUser(true)} />}
            />
          )}
          {user && (
            <Route
              path="/SignIn"
              element={<RecipeForm logoutx={() => setUser(false)} />}
            />
          )}
          
        </Route>
         

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/home" element={<Home />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={user ? "/SignIn/recipeform" : "/"} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
