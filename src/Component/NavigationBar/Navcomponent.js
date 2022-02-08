import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navcomponent() {
  return (
    <div
      style={{ alignContent: "center", fontFamily: "serif", fontSize: "16px" }}
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
      </Nav>
    </div>
  );
}

export default Navcomponent;
