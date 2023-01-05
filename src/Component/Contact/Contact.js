import React from "react";
import Contact1 from "../../pics/Contact1.jpg";

function Contact() {
  return (
    <div>
      <div className=" d-flex" style={{ justifyContent: "center" }}>
        <div className="card">
          <img
            src={Contact1}
            className="img-fluid "
            width={2000}
            height={450}
            alt="..."
          ></img>
         
        </div>
      </div>

      <div>
        <div className="d-flex  justify-content-center">
          <div className="container m-2 p-2  border-bottom border-top  border-primary border-3 rounded-3  ">
            <div className="card text-center bg-transparent">
              <div className="card-header"><h1>Contact US</h1></div>
              <div className="card-body">
                <p className="card-text">
                  Recipe north street, opp secure garden. Hotel View,
                </p>
                <p>City State Office, Melbournebr</p>
                <p>Australia. 123456</p>
              </div>
              <div className="card-footer">
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
