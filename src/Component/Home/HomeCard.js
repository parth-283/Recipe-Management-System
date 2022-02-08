import React from "react";
import { Button } from 'react-bootstrap';
import Home1 from "../../pics/Home1.png"
import Home2 from "../../pics/Home2.png"
import Home3 from "../../pics/Home3.png"

function HomeCard() {
  return (
    <div>
      <div className=" m-2 p-2   align-middle">
        <div className="container  align-middle">
          <div className="row m-2">
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                  src={Home1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                 src={Home2}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                  src={Home3}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2 ">
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                  src={Home1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                  src={Home2}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: " 18rem" }}>
                <img
                  src={Home3}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button href="#" className="btn btn-primary">
                    Go somewhere
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
