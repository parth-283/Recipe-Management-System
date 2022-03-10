import React, { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import logo from "../../../pics/RecipeLogo.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navcomponent from "./Navcomponent";
import NavsocialIcon from "./NavsocialIcon";
// import { useNavigate } from 'react-router';
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";

function NavigationBar() {
  let reg = localStorage.getItem("login-user-info");
  let element = JSON.parse(reg);
  let emailuser = element[0].element.Email;
  let passworduser = element[0].element.Password;
  let FNameuser = element[0].element.FName;
  let LNameuser = element[0].element.LName;
  // console.log("FNameuser", FNameuser);

  let login = localStorage.getItem("login-info");
  let logindata = JSON.parse(login);
  let emaillogin = logindata[0].logindata.email;
  let passwordlogin = logindata[0].logindata.password;

  let isloggedin;
  if (emailuser === emaillogin && passworduser === passwordlogin) {
    isloggedin = true;
  } else {
    isloggedin = false;
  }
  // console.log( "isloggedin",isloggedin);
  // console.log( "emailuser",emailuser);
  // console.log( "passworduser",passworduser);
  // console.log( "emaillogin",emaillogin);
  // console.log( "passwordlogin",passwordlogin);

  const navigate = useNavigate();

  const logout = () => {
    let logindata = {
      email: "$@.com",
      password: "********",
    };
    localStorage.setItem("login-info", JSON.stringify([{ logindata }]));
    navigate("/home");
  };

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4500/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Col xs={3} md={2}>
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
            <Col xs={6} md={7} className="w-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav " />
              <Navbar.Collapse
                id="basic-navbar-nav "
                style={{
                  fontFamily: "cursive",
                }}
              >
                <Nav className="me-auto   fs-5 ">
                  <Navcomponent />
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col xs={3} md={3}>
              <Navbar style={{ justifyContent: "end" }}>
                <div className="  ">
                  <div className="col">
                    {!isloggedin ? (
                      <div>
                        <div className="col  pb-4">
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
                        <div>
                          <NavsocialIcon />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="col  pb-4">
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <div>
                                <button
                                  className="btn btn-outline-primary fs-5"
                                  onClick={logout}
                                >
                                  logout
                                </button>
                              </div>
                            </Grid>
                            <Grid item xs={12}>
                              <div>
                                <h4>
                                  <Badge
                                    className="rounded-2 p-2"
                                    style={{
                                      backgroundColor: "#1565c0",
                                      color: "#becccf",
                                    }}
                                  >
                                    <AccountCircleIcon />
                                    {FNameuser} {LNameuser}{" "}
                                  </Badge>
                                </h4>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    )}
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
