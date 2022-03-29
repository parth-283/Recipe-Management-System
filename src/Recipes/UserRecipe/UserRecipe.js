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
        let x = getdata.map((item) => {
          console.log("++++++++item", item);
          // data.push(item.ingredients)
          let ingredientsdata = item.ingredients.split(",");
          let directionsdata = item.directions.split(".");
          let Nutritiondata = item.Nutrition.split(",");
          return {
            ...item,
            ingredients: ingredientsdata,
            directions: directionsdata,
            Nutrition: Nutritiondata,
          };
          // directions
        });

        setRecipe(x);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log("recipe", recipe);

  const handleclick = (value) => {
    let url = value.target.value;
    window.open(url);
    console.log("url", url);
  };
  const handlerror = (value) => {
    let data = value.target.value;
    alert(data)
  }
  // console.log("recipe.Video",recipe.Video);
  // const handleClick = value => console.log(value.target.value)

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

              <ol
                className="scroll card-text"
                style={{ textAlign: "start" }}
                key={recipe.ingredients[0]}
              >
                {recipe &&
                  recipe.ingredients &&
                  recipe.ingredients.length > 0 &&
                  recipe.ingredients.map((item) => <li>{item}</li>)}
              </ol>
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
                      <td>{recipe.Prep === 0 ? "-" : recipe.Prep}</td>
                      <td>{recipe.CookMins === 0 ? "-" : recipe.CookMins}</td>
                      <td>
                        {recipe.AdditionalMins === 0
                          ? "-"
                          : recipe.AdditionalMins}
                      </td>
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
                      <td>{recipe.TotalTime === 0 ? "-" : recipe.TotalTime}</td>
                      <td>{recipe.Servings === 0 ? "-" : recipe.Servings}</td>
                      <td>{recipe.Yield === 0 ? "-" : recipe.Yield}</td>
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
                  <ul>
                    {recipe &&
                      recipe.directions &&
                      recipe.directions.length > 0 &&
                      recipe.directions.map((item, index) => {
                        return (
                          <div key={index}>
                            <div>
                              &nbsp;
                              <label className="fs-5 fw-bold">
                                Step {++index}:{" "}
                              </label>
                              <p>{item}</p>
                            </div>
                            <br />
                          </div>
                        );
                      })}
                  </ul>
                </h6>
                <hr />
                <h6 className="card-title">
                  <b> Chef's Note : </b>
                  {recipe.ChefNote}
                </h6>
                <hr />
                <h6 className="card-title">
                  <b> Nutrition Facts : </b>
                  <ul>
                    {recipe &&
                      recipe.Nutrition &&
                      recipe.Nutrition.length > 0 &&
                      recipe.Nutrition.map((item) => <li>{item}</li>)}
                  </ul>
                </h6>

                <p className="card-text">
                  <small className="text-muted"></small>
                </p>

                {recipe.Video === "" ? (
                  <button
                    value="Video is not found"
                    onClick={handlerror}
                    className="  btn btn-outline-info"
                  >
                    Video Link
                  </button>
                ) : (
                  <button
                    value={recipe.Video}
                    onClick={handleclick}
                    className="btn btn-outline-info"
                  >
                    Video Link
                  </button>
                )}


                {recipe.Video === "" ? (
                  <button
                  value="SocialMedia Account is not found"
                    onClick={handlerror}
                    className=" mx-2 btn btn-outline-info"
                  >
                    SocialMedia Link
                  </button>
                ) : (
                  <button
                    value={recipe.SocialMedia}
                    onClick={handleclick}
                    className="mx-2 btn btn-outline-info"
                  >
                    SocialMedia Link
                  </button>
                )}
               
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRecipe;
