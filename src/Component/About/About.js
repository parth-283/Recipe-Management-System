import * as React from "react";
import About1 from "../../pics/About1.jpg";
// import chef1 from "../../pics/chef1.png";
import chef2 from "../../pics/chef2.jpg";
import chef3 from "../../pics/chef3.jpg";

function About() {
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
              About Us
            </h5>
            <p className="card-title fs-3  fw-normal">
              About our recipes and cooks.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-2">
        <div className="row">
          <div className="col text-start ">
            <p className="fs-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum.
            </p>
          </div>
          <div className="col text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "orange" }}>
        <div className="container p-2">
          <div className="row">
            <div className="col text-center">

              <div class="card text-center  " style={{ width: "18rem" }}>
              <figure class="figure p-2">
                  <img
                    src={chef3}
                    class="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div class="card text-center" style={{ width: "18rem" }}>
              <figure class="figure p-2">
                  <img
                    src={chef2}
                    class="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div class="card" style={{ width: "18rem" }}>
              <figure class="figure p-2">
                  <img
                    src={chef3}
                    class="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
