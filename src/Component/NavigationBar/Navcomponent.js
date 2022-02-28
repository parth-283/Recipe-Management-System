import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navcomponent() {
  return (
    <div
    className=""
      style={{ alignContent: "center" ,     textTransform: "uppercase" }}
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
        <Link className="nav-link fs-5" as={Link} to="/recipeform">
          <b>Recipe</b>
        </Link>
      </Nav>
    </div>
  );
}

export default Navcomponent;
