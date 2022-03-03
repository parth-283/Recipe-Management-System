import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navcomponent() {
  let reg = localStorage.getItem("user-info");
  let regdata = JSON.parse(reg);
  let emailreg = regdata[0].regdata.email;
  let passwordreg = regdata[0].regdata.password;

  let login = localStorage.getItem("login-info");
  let logindata = JSON.parse(login);
  let emaillogin = logindata[0].logindata.email;
  let passwordlogin = logindata[0].logindata.password;

  console.log("emailreg", emailreg);
  console.log("passwordreg", passwordreg);
  console.log("emaillogin", emaillogin);
  console.log("passwordlogin", passwordlogin);

  var isloggedin;
  if (emailreg === emaillogin && passwordreg === passwordlogin) {
    isloggedin = true;
  } else {
    isloggedin = false;
  }

  return (
    <div
      className=""
      style={{ alignContent: "center", textTransform: "uppercase" }}
    >
      <Nav>
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
