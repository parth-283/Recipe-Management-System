import React from "react";
import About1 from "../../pics/About1.jpg";

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

      <div>
        <div className="d-flex  justify-content-center">
          <div className="container m-2 p-2  border-bottom border-top  border-primary border-3 rounded-3  ">
            <div class="card text-center bg-transparent">
              <div class="card-header"><h1>Contact US</h1></div>
              <div class="card-body">
                <p class="card-text">
                  Recipe north street, opp secure garden. Hotel View,
                </p>
                <p>City State Office, Melbournebr</p>
                <p>Australia. 123456</p>
              </div>
              <div class="card-footer">
                <p>☎️ Phone: +123 4567 890</p>
                <p>📠 Fax: +123 4567 890</p>
                <p>📧 Email: info@foodandtaste.com</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
