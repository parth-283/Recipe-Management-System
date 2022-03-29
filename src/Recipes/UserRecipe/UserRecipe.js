import React from "react";

function UserRecipe() {
  const [recipe, setRecipe] = React.useState([]);

  const fetchData = () => {
    fetch("http://localhost:4500/recipe/list")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((getdata) => {
        console.log("getdata", getdata);

        setRecipe(getdata);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log("recipe", recipe);

  return (
    <div>
      {recipe.map((recipe) => (
        <div
          className="card my-3 container "
          style={{ maxWidth: "800px" }}
          key={recipe.UID}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={recipe.imageurl}
                className="img-fluid rounded mt-3"
                alt={recipe.Name}
              />
              <div className="m-2 ">
                <button className="btn btn-transperent fs-3">
                  <i className="bi bi-hand-thumbs-up"></i>
                </button>
                <button className="btn btn-transperent fs-3">
                  <i className="bi bi-hand-thumbs-down"></i>
                </button>
              </div>
              <h4>ingredient</h4>
              <ul className="scroll card-text" style={{ textAlign: "start" }}>
                <li>{recipe.ingredients}</li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="col d-flex">
                  <div className="row-6">
                    <h5 className="card-title">
                      <b>Name : </b>
                      {recipe.Name}
                    </h5>
                  </div>
                  <div className="row-6 mx-3">
                    <h5 className="card-title">
                      <b>Category : </b>
                      {recipe.Category}
                    </h5>
                  </div>
                </div>
                <hr />
                <h6 className="card-title">
                  <b>Short Description : </b>
                  {recipe.ShortDes}
                </h6>

                <hr />
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Prep</th>
                      <th scope="col">CoockMins</th>
                      <th scope="col">AdditionalMins</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{recipe.Prep}</td>
                      <td>{recipe.CookMins}</td>
                      <td>{recipe.AdditionalMins}</td>
                    </tr>
                    <tr>
                      <td> </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      <th scope="col">TotalTime</th>
                      <th scope="col">Servings</th>
                      <th scope="col">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{recipe.TotalTime}</td>
                      <td>{recipe.Servings}</td>
                      <td>{recipe.Yield}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <h6 className="card-title">
                  <b> Description : </b>
                  {recipe.description}
                </h6>
                <hr />
                <h6 className="card-title">
                  <b> Directions : </b>
                  {recipe.directions}
                </h6>
                <hr />
                <h6 className="card-title">
                  <b> Chef's Note : </b>
                  {recipe.ChefNote}
                </h6>
                <hr />
                <h6 className="card-title">
                  <b> Nutrition Facts : </b>
                  {recipe.Nutrition}
                </h6>

                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
                <button href={recipe.Video} className="btn btn-outline-info">
                  Video Link
                </button>
                <button
                  href={recipe.SocialMedia}
                  className="btn btn-outline-info ms-4"
                >
                  SocialMedia Link
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRecipe;
