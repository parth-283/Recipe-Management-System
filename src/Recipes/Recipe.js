import React from "react";
import { Link } from "react-router-dom";
import PizzaMuffins1 from "../pics/PizzaMuffins1.png";

function Recipe() {
  return (
    <div>
      <div className="container card my-2">
        <div className="row ">
          <div className="col">
            {" "}
            <img src={PizzaMuffins1} className="card-img-top m-2" alt="..." />
          </div>
          <div className="col border-start border-info border-3">
            {" "}
            <div className="card-body ">
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
                  Go somewhere
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
