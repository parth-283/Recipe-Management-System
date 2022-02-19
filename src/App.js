import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header&Footer/Header";
import Home from "./Component/Home/Home";
import Footer from "./Component/Header&Footer/Footer";
import Error404 from "./Component/Error404/Error404";
import Admin from "./admin/Component/Admin";
import SignIn from './Component/SignUp&SignIn/SignIn';
import SignUp from './Component/SignUp&SignIn/SignUp';
import Recipe from './Recipes/Recipe.js';
import PizzaMuffins from './Recipes/PizzaMuffins';
import Breakfast from './Recipes/Category/Breakfast';
import Lunch from './Recipes/Category/Lunch';
import Dinner from './Recipes/Category/Dinner';
import Dessert from './Recipes/Category/Dessert';

function App() {
  return (
    <div style={{ backgroundColor: "#bddaf2" }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
          <Route path="/Dessert" element={<Dessert />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/home" element={<Home />} />
        </Route>

                         

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
