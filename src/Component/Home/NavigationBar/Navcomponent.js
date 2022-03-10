import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navcomponent() {
  let reg = localStorage.getItem("login-user-info");
  let element = JSON.parse(reg);
  let emailuser = element[0].element.Email;
  let passworduser = element[0].element.Password;

  let login = localStorage.getItem("login-info");
  let logindata = JSON.parse(login);
  let emaillogin = logindata[0].logindata.email;
  let passwordlogin = logindata[0].logindata.password;


  var isloggedin;
  if (emailuser === emaillogin && passworduser === passwordlogin) {
    isloggedin = true;
  } else {
    isloggedin = false;
  }
  return (
    <div
      className="navbar-nav "
      style={{ alignContent: "center", textTransform: "uppercase" }}
    >
      <Nav className="me-auto">
        <Link className="nav-link fs-5" as={Link} to="/home">
          <b>Home</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/about">
          <b>About</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/contact">
          <b>Contact</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/feedback">
          <b>FeedBack</b>
        </Link>

        {isloggedin ? (
          <Link className="nav-link fs-5" as={Link} to="/recipeform">
            <b>AddRecipe</b>
          </Link>
        ) : (
          <Link className="nav-link fs-5" as={Link} to="/showrecipe">
            <b>Recipe</b>
          </Link>
        )}
      </Nav>
    </div>
  );
}

export default Navcomponent;
