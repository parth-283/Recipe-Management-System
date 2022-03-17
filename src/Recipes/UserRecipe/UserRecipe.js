import React from "react";

function UserRecipe() {
  const [recipe, setRecipe] = React.useState([]);

  const fetchData = () => {
    fetch("http://localhost:4500/recipe/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
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
        <div className="card my-3 container " style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={recipe.Image}
                className="img-fluid rounded mt-3"
                alt={recipe.Name}
              />
              <h4>ingredient</h4>
              <ul className="scroll card-text" style={{ textAlign: "start" }}>
                <li>{recipe.ingredients}</li>
              {console.log("recipeerrrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeee",recipe)}
              </ul>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                
                <h5 className="card-title">
                  <b>Name : </b>
                  {recipe.Name}
                </h5>
                <hr/>
                <h6 className="card-title">
                  <b>Short Description : </b>
                  {recipe.ShortDes}
                </h6>
                {/* <p></p> */}
                <hr/>
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
                <hr/>
                <h6 className="card-title">
                  <b> Description : </b>
                  {recipe.description}
                </h6>
               <hr/>
                <h6 className="card-title">
                  <b> Directions : </b>
                  {recipe.Directions}
                </h6>
                <hr/>
                <h6 className="card-title">
                  <b> Chef's Note : </b>
                  {recipe.ChefNote}
                </h6>
                <hr/>
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
            <button href={recipe.SocialMedia} className="btn btn-outline-info ms-4">
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
