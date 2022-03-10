import React from "react";
import { Card } from "react-bootstrap";
import NavsocialIcon from "../Home/NavigationBar/NavsocialIcon";
import footer from "../../pics/footer.png";
import Navcomponent from '../Home/NavigationBar/Navcomponent';

function Footer() {
  return (
    <div style={{ position: "fixed", left: 0,
    bottom: 0,
    width: "100%"}}>
      <Card
        className=" text-white text-center"
        style={{ backgroundColor: "#bddaf2" }}
      >
        <Card className=" bg-dark ">
          <Card.Img
            src={footer}
            alt="Card image"
            width="auto"
            height="355x"
            style={{ opacity: "0.3" }}
          />
          <Card.ImgOverlay>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="">
              <Card.Title> </Card.Title>
              <div className="container">
                <div className="row">
                  <div
                    className="col text-start"
                    style={{ fontFamily: "monospace" }}
                  >
                    <Card.Text>
                      Yummy food is scrumptious, delicious, delectable,
                      luscious, great tasting, much more than tasty, really
                      appetizing, lip-smacking; the kind of food to have you
                      licking your lips in anticipation. This is the word
                      everyone wants to hear when bringing food to the table.
                      Yummy food is never unpalatable, plain tasting,
                      distasteful or disgusting.
                    </Card.Text>
                  </div>
                  <div className="col" >
                    +
                    <div className="row d-grid">
                      <div className="col">
                        <Navcomponent/>
                      </div>
                      <div className="col">
                        <NavsocialIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card.ImgOverlay>
            <Card.Footer
              className="text-muted  "
              style={{ fontFamily: "cursive" }}
            >
              Copiright@2022 Devloped By:Parth
            </Card.Footer>
        </Card>
      </Card>
    </div>
  );
}

export default Footer;
