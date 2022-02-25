import React from "react";
import logo from "../../pics/RecipeLogo.png";
import {  Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navcomponent from "./Navcomponent";
function NavigationBar() {
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
              <Col xs={4} md={2}  >
                <Navbar.Brand style={{}}>
                  <img
                    src={logo}
                    className="card-img-top"
                    alt="..."
                    as={Link}
                    to="/home"
                    // style={{ padding: " 0px 7px " }}
                  />
                </Navbar.Brand>
              </Col>
              <Col xs={8} md={6} >
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav " /> */}
                <Navbar.Collapse
                  id="basic-navbar-nav "
                  style={{ fontFamily: "cursive", padding:" 0px 0px 0px 140px "}}
                  
                  
                >
                  <Nav className="me-auto   fs-5 ">
                    <Navcomponent />
                  </Nav>
                </Navbar.Collapse>
              </Col>
              <Col xs={5} md={3}>
                <Navbar style={
                      {
                        padding: "0px 0px 0px 114px"
                      }
                    }>
                  <div
                    className="container  "
                    
                  >
                    <div className="col">
                      <div className="col d-flex justify-content-center">
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
                      <div className="col d-flex justify-content-center  fs-5 pt-4 ">
                        <Link
                          to="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525806192%7Ce%7Cfb%20login%7C&placement=&creative=550525806192&keyword=fb%20login&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-320262102914%26loc_physical_ms%3D1007760%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KEDvlnPt1Jy7tWR8zBcpdxFIOwuBUYMOmqpXw6Y1QU0i6L9y-0RWrsaAjcLEALw_wcB"
                          className="m-1  "
                        >
                          <i className="bi bi-facebook text-light"></i>
                        </Link>
                        <Link to="/" className="m-1 ">
                          <i
                            className="bi bi-youtube  "
                            style={{ color: "red" }}
                          ></i>
                        </Link>
                        <Link
                          to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                          className="m-1"
                        >
                          <i className="bi bi-twitter text-light"></i>
                        </Link>
                        <Link
                          to="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127652|e|instagram%20login|&placement=&creative=547419127652&keyword=instagram%20login&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-35100690670%26loc_physical_ms%3D1007760%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KHfvSi7_EP5WFPy9jqEzkGhieBI2wkRgm-kKw7I9AH0nYckAXLpWWMaAsIGEALw_wcB"
                          className="m-1"
                          style={{ color: "#8a3ab9" }}
                        >
                          <i class="bi bi-instagram"></i>
                        </Link>
                        <Link
                          to="https://in.pinterest.com/login/"
                          className="m-1"
                          style={{ color: "red" }}
                        >
                          <i class="bi bi-pinterest"></i>
                        </Link>
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
