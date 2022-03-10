import { height } from "@mui/system";
import React from "react";

function ShowRecipeAPI({
  key,
  title,
  calories,
  image,
  ingredients,
  shareAs,
  source,
  mealType,
  dishType,
  cautions,
  cuisineType,
  dietLabels,
  totalTime,
  totalWeight,
  yields,
  totalNutrients,
  url,
  healthLabels,
}) {
  const handleClick = () => {
    window.open(url);
  };

// setTimeout(show, 3000);

//   function show() {
//     var target = document.getElementsByClassName("showdata")
//   target.style.className="spinner-grow"
//   }

  return (
    <div>
      {" "}
      <div className="card mb-3 "  style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={title} />
            <h4>ingredient</h4>
            <ul className="scroll card-text" style={{textAlign:"start"}}>
              {ingredients.map((ingredient) => (
                <li>
                  <label>{ingredient.text}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name:{title}</h5>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">source</th>
                    <th scope="col">mealType</th>
                    <th scope="col">dishType</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{source}</td>
                    <td>{mealType}</td>
                    <td>{dishType}</td>
                  </tr>
                  <tr>
                    <td> </td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th scope="col">cautions</th>
                    <th scope="col">cuisineType</th>
                    <th scope="col">dietLabels</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{cautions}</td>
                    <td>{cuisineType}</td>
                    <td>{dietLabels}</td>
                  </tr>
                  <tr>
                    <td> </td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th scope="col">totalTime</th>
                    <th scope="col">totalWeight</th>
                    <th scope="col">calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{totalTime}</td>
                    <td>{totalWeight.toFixed(2)}</td>
                    <td>{calories.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="col-mb-8">
                <div style={{ width: "200px" }}>
                  <h5>healthLabels</h5>
                  <ol
                    className="showscroll card-text "
                    style={{ height: "277px",textAlign:"start" }}
                  >
                    {healthLabels.map((healthLabel) => (
                      <li>
                        <label>{healthLabel}</label>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <p className="card-text">
                <small className="text-muted"></small>
              </p>
              <button onClick={handleClick} className="btn btn-outline-info">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipeAPI;
