import React from "react";
import { Link } from "react-router-dom";
import About1 from "../pics/About1.jpg";
import PizzaMuffins1 from "../pics/PizzaMuffins1.png";

function Recipe() {
  return (
    <div>
      <div className="text-center   ">
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
                style={{ paddingTop: "185px", fontSize: "74px" }}
              >
                Recipes
              </h5>
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="container card my-3"
        style={{ backgroundColor: "#4ab1ff" }}
      >
        <div className="row ">
          <div className="col border-dark border-top border-bottom border-3 rounded">
            {" "}
            <img src={PizzaMuffins1} className="card-img-top my-5" alt="..." />
          </div>
          <div className="col border-start border-dark border-top border-bottom border-3 rounded">
            {" "}
            <div className="card-body my-5">
              <h5 className="card-title text-center ">Pizza Muffins</h5>
              <p className="card-text">
                Put down the fork and knife… here's a Chicago deep-dish pizza
                that you can actually eat by holding it in your hands! A
                beautiful golden crust contains a meaty, cheesy, saucy filling
                with Italian sausage, sweet peppers, and 3 types of cheese. The
                sauce and cheese char slightly on the outside as they bake,
                resulting in a super savory taste.
              </p>
              <div className="text-center ">
                <Link to="/pizzaMuffins" className="btn btn-primary ">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container card my-2"
        style={{ backgroundColor: "#4ab1ff" }}
      >
        <div className="row ">
          <div className="col border-dark border-top border-bottom border-3 rounded ">
            {" "}
            <img src={PizzaMuffins1} className="card-img-top my-5" alt="..." />
          </div>
          <div className="col border-start border-dark border-top border-bottom border-3 rounded">
            {" "}
            <div className="card-body my-5">
              <h5 className="card-title text-center">Pizza Muffins</h5>
              <p className="card-text">
                Put down the fork and knife… here's a Chicago deep-dish pizza
                that you can actually eat by holding it in your hands! A
                beautiful golden crust contains a meaty, cheesy, saucy filling
                with Italian sausage, sweet peppers, and 3 types of cheese. The
                sauce and cheese char slightly on the outside as they bake,
                resulting in a super savory taste.
              </p>
              <div className="text-center ">
                <Link to="/pizzaMuffins" className="btn btn-primary ">
                Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
