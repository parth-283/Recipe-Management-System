import React from "react";
import logo from "../../pics/RecipeLogo.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navcomponent from "./Navcomponent";
function NavigationBar() {
  return (
    <div style={{ backgroundColor: "#88cafc" }}>
      <div
        className=" jumbotron  pt-4 px-4  "
        style={{
          fontFamily: "serif",
          fontSize: "16px",
        }}
      >
        <Navbar expand="lg">
          <Navbar.Brand style={{   }}>
            <img
              src={logo}
              className="card-img-top"
              alt="..."
              as={Link}
              to="/home"
              style={{    padding:" 0px 7px "}}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav " style={{    padding:" 0px 255px "}}>
            <Nav className="me-auto  d-flex justify-content-center fs-5 ">
              <Navcomponent />
            </Nav>
          </Navbar.Collapse>

          <Navbar >
            <div className="container " style={{    padding:" 0px 63px "}}>
              <div className="col">
                <div className="col">
                  <Link
                    type="button"
                    className="btn btn-outline-primary me-2 fs-5"
                    as={Link}
                    to="/SignIn"
                  >
                    SignIn
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-outline-primary fs-5"
                    as={Link}
                    to="/SignUp"
                  >
                    SignUp
                  </Link>
                </div>
                <div className="col d-flex justify-content-center m-1 fs-5 ">
                  <Link to="/" className="m-1  ">
                    <i className="bi bi-facebook text-light"></i>
                  </Link>
                  <Link to="/" className="m-1 ">
                    <i className="bi bi-youtube  " style={{ color: "red" }}></i>
                  </Link>
                  <Link to="/" className="m-1">
                    <i className="bi bi-twitter text-light"></i>
                  </Link>
                  <Link to="/" className="m-1" style={{ color: "#8a3ab9" }}>
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="m-1" style={{ color: "red" }}>
                    <i class="bi bi-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Navbar>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
