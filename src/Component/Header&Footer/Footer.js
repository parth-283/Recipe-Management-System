import React from "react";
import { Card } from "react-bootstrap";
import Navcomponent from "./../NavigationBar/Navcomponent";

function Footer() {
  return (
    <div >
      <Card className="text-center" style={{ backgroundColor: "#88cafc" }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title> </Card.Title>
          <div className="container">
            <div className="row">
              <div className="col">
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </div>
              <div className="col">
                  <Navcomponent />
              </div>
              <div className="col">Column</div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
