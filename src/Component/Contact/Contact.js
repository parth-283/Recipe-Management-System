import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import About1 from "../../pics/About1.jpg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className=" d-flex" style={{ justifyContent: "center" }}>
        <div className="card  ">
          <img
            src={About1}
            className="img-fluid "
            width={2000}
            height={450}
            alt="..."
          ></img>
          <div className="card-img-overlay text-center ">
            <h5
              className="card-title fw-bolder fw-bold"
              style={{ paddingTop: "128px", fontSize: "74px" }}
            >
              Contact Us
            </h5>
            <p className="card-title fs-3  fw-normal fw-bold">
              Suggestions? Questions? Contact us below.
            </p>
          </div>
        </div>
      </div>

      <div >
        <div class="card text-center mt-2   "   style={{ backgroundColor: "#4ab1ff" }} >
          <h5 class="card-header  fw-bold fs-3">Follow us!</h5>
          <div class="card-body">
            <div class="card-title fs-3">
              <Link to="/" className="m-1  ">
                <i className="bi bi-facebook " style={{    backgroundColor:" white",
    borderRadius: "32px"}}></i>
              </Link>
              <Link to="/" className="m-1">
                <i className="bi bi-youtube"></i>
              </Link>
              <Link to="/" className="m-1">
                <i className="bi bi-twitter"></i>
              </Link>
            </div>
            <p class="card-text fs-4 fw-ligh">
              Be sure not to miss us on social media. We hope to see you there!
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex  justify-content-center">
        <div className="container m-2 p-2  border-bottom border-top  border-primary border-3 rounded-3  ">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Address..."
                name="email"
                type="Address"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="city" name="city" type="city" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose Your State Name....</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadara and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="zip" name="zip" type="zip" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>your Suggestions & Questions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="your Suggestions & Questions"
                />
              </Form.Group>
            </Row>

            <div className="d-flex  justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
