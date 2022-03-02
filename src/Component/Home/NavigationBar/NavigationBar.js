import React from "react";
// import { useEffect, useState } from "react";
import logo from "../../../pics/RecipeLogo.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navcomponent from "./Navcomponent";
import NavsocialIcon from "./NavsocialIcon";
// import { useNavigate } from 'react-router';


function NavigationBar() {
  // logoutx
//   const [user, setUser] = useState();

//   const navigate = useNavigate()

// const logout = () => {
//   logoutx()
//   navigate('/')
//   console.log("logout");
// }



  // useEffect(() => {
  //   setTimeout(() => {
  //     let userdata = localStorage.getItem("login");
  //     if (userdata == "true") {
  //       setUser(false);
  //     } else {
  //       setUser(true);
  //     }
  //     //  console.log("useruseru+++++++++++++++++++++++",user);
  //   }, 100);
  // });
  return (
    <div style={{ backgroundColor: "#88cafc" }}>
      <div
        className=" jumbotron   "
        style={{
          fontFamily: "serif",
        }}
      >
        {/* <Container > */}
        <Row>
          <Navbar expand="lg" className=" d-flex justify-content-center">
            <Col xs={4} md={2}>
              <Navbar.Brand style={{}}>
                <img
                  src={logo}
                  className="card-img-top"
                  alt="..."
                  as={Link}
                  to="/home"
                  style={{ width: "188px" }}
                />
              </Navbar.Brand>
            </Col>
            <Col xs={8} md={6} className="w-auto">
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav " /> */}
              <Navbar.Collapse
                id="basic-navbar-nav "
                style={{
                  fontFamily: "cursive",
                  padding: " 0px 0px 0px 120px ",
                }}
              >
                <Nav className="me-auto   fs-5 ">
                  <Navcomponent />
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col xs={5} md={3}>
              <Navbar
                style={{
                  padding: "0px 0px 0px 114px",
                }}
              >
                <div className="container  ">
                  <div className="col">
                    {/* {console.log("+++++++++++user-------------",user)} */}
                    {/* {user && ( */}
                      <div className="col d-flex justify-content-center pb-4">
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
                    {/* )}
                     {!user && (
                      <div className="col d-flex justify-content-center pb-4">
                        <button
                          className="btn btn-outline-primary fs-5"
                          onClick={logout}
                        >
                          logout 
                        </button>
                      </div>
                    )} */}
                    <div>
                      <NavsocialIcon />
                    </div>
                  </div>
                </div>
              </Navbar>
            </Col>
          </Navbar>
        </Row>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default NavigationBar;
