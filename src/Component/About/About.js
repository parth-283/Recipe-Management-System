import * as React from "react";
import "../../style/About.css";
import About1 from "../../pics/About1.jpg";
import chef1 from "../../pics/chef1.jpg";
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
        </div>
      </div>

      <div className="card text-center m-2" style={{ backgroundColor: "#bddaf2" }}>
        <div className="card-header">
          <h1>About US</h1>
        </div>
        <div className="card-body">
          <div className="container my-2">
            <div className="row">
              <div className="col text-start ">
                <p className="fs-5 ">
                  Strong, clean lines that are vertical, horizontal, or angled,
                  provide neat and logical dimension to the plate. Lines can be
                  created by the placement of proteins, vegetables, or sauces.
                  Patterns emerge by repeating these lines, and variety is
                  introduced through intersecting or overlapping lines. The
                  monotony of repetitive lines is interrupted by the addition of
                  other food shapes and carefully placed garnishes.
                </p>
              </div>
              <div className="col text-start">
                <p className="fs-5 ">
                  The organized randomness of free-form plating presents an
                  arbitrary yet natural appearance, however it still requires
                  thought and planning using similar visual rules of
                  composition. Free-form plating, sometimes referred to as
                  organic, gives credence to the concept of “what grows together
                  goes together”. This approach uses a flattened design that is
                  more relaxed. Free form plating, like the deconstructed
                  approach, can be used to create a more fluid approach to food
                  layout and design. This style of plating often uses wood,
                  slate or stone plates to lend a natural element to the
                  presentation
                </p>
              </div>
            </div>
          </div>{" "}
        </div>

        <div class="card-footer">
        <div style={{ backgroundColor: "orange" }}>
        <div className="container p-2">
          <div className="row">
            <div className="col text-center">
              <div className="card text-center CardWidthAndHeight ">
                <figure className="figure p-2">
                  <img
                    src={chef1}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">Smart Cooking</h5>
                  <p className="card-text">
                    Grilling is the method of cooking food over direct heat. The
                    food is exposed to the flames and the heat comes from the
                    coals underneath the grate. You can grill over an open flame
                    or in a grill pan. Grill grates are used, and the food that
                    is grilled usually has charred lines on it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="card text-center CardWidthAndHeight">
                <figure className="figure p-2">
                  <img
                    src={chef2}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">innovative representation</h5>
                  <p className="card-text">
                    The color of service ware affects the overall presentation
                    as well as our taste perceptions and even our appetite.
                    White plates are a traditional color favored by chefs
                    because it makes the vibrant colors of the food more
                    visually appealing to the guest.
                  </p>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="card CardWidthAndHeight">
                <figure className="figure p-2">
                  <img
                    src={chef3}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">Good representation</h5>
                  <p className="card-text">
                    Sauces tie the elements of the dish together providing color
                    and luster. They should be of the correct color,
                    consistency, and texture. Sauces variations include
                    compotes, chutneys, or salsas, as well as the traditional
                    brown, white, and butter sauces.
                  </p>
                </div>
              </div>
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
