import React, { useEffect } from "react";

function RecipeForm({}) {
  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);
  const [directions, setDirections] = React.useState("");
  const [nutrition, setNutrition] = React.useState("");

  // let id = ""
  // useEffect(() => {
  
  //   let max = Math.max(...recipe.map(({ UID }) => UID));
  //   id = max
  //   setInput({})
  // }, [])
  // console.log("++max", ++max);
  // console.log("maxxxxxxxxxxxxxxxxxxx", max);
  // console.log("max++", max++);

  const [input, setInput] = React.useState({
    UID: Math.random().toString().substr(4, 4),
    nameofrecipe: "",
    Category: "",
    shortdescrip: "",
    prep: "",
    cookmins: "",
    additionalmins: "",
    totaltime: "",
    servings: "",
    yield: "",
    ingredients: [],
    description: "",
    directions: [],
    chefnote: "",
    nutritionfacts: "",
    Image: "",
    videolink: "",
    socialmedialink: "",
  });
  console.log("inputtttttttttt", input);

  // console.log("description", description);
  // console.log("ingredients", ingredients);
  // console.log("nutrition", nutrition);
  // console.log("submit", submit);
  // console.log("dummy", dummy);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const ImageHandler = (e)=>{
    let reader = new FileReader(e.target.files[0])
    reader.onloadend = () => {
      setInput({...input , Image: reader.result })
    }

     reader.readAsDataURL(e.target.files[0])
    setInput({...input,Image:e.target.files[0]})
  }

  const addingredients = (props) => {
    if (ingredients !== "") {
      if (input.ingredients.length > 0) {
        const dummyIngredients = [...input.ingredients];
        dummyIngredients.push(ingredients);
        setInput({
          ...input,
          ingredients: dummyIngredients,
        });
        setIngredients("");
      } else {
        setInput({
          ...input,
          ingredients: [ingredients],
        });
        setIngredients("");
      }
    }
  };

  const addDirections = (props) => {
    if (directions !== "") {
      if (input.directions.length > 0) {
        const dummyDirections = [...input.directions];
        dummyDirections.push(directions);
        setInput({
          ...input,
          directions: dummyDirections,
        });
        setDirections("");
      } else {
        setInput({
          ...input,
          directions: [directions],
        });
        setDirections("");
      }
    }
  };

  const addNutrition = (props) => {
    if (nutrition !== "") {
      if (input.nutritionfacts.length > 0) {
        const dummyNutrition = [...input.nutritionfacts];
        dummyNutrition.push(nutrition);
        setInput({
          ...input,
          nutritionfacts: dummyNutrition,
        });
        setNutrition("");
      } else {
        setInput({
          ...input,
          nutritionfacts: [nutrition],
        });
        setNutrition("");
      }
    }
  };
  const data = JSON.stringify(localStorage.getItem("recipe"));
  console.log("data", data.input);

  async function handleSubmit(event) {
    localStorage.setItem("recipe", { input });
    // setSubmit(input);
    // console.log("input submit",input);

    let requestOptions = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    let resultdata = await fetch(
      `http://localhost:4500/recipe/add?UID=${input.UID}&Name=${input.nameofrecipe}&Category=${input.Category}&ShortDes=${input.shortdescrip}&Prep=${input.prep}&CookMins=${input.cookmins}&AdditionalMins=${input.additionalmins}&TotalTime=${input.totaltime}&Servings=${input.servings}&Yield=${input.yield}&ingredients=${input.ingredients}&description=${input.description}&Directions=${input.directions}&ChefNote=${input.chefnote}&Nutrition=${input.nutritionfacts}&Image=${input.Image}&Video=${input.videolink}&SocialMedia=${input.socialmedialink}`,
      requestOptions
    );
    let result = await resultdata.json();
    console.log("resultyyyyyyyy", result);
  }

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

  return (
    <div className="container">
      <h1 className="text-center">Add Recipe Form</h1>
      <form action="/" encType="multipart/form-data" method="post">
        <div className=" border-top  border-bottom  border-primary  border-3 rounded m-3">
          <div className="row">
            <div className="col-6">
              <div className="title">
                <label className="form-label">Name Of Recipe*</label>
              </div> 
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name Of Recipe"
                name="nameofrecipe"
                value={input.nameofrecipe}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <div className="title">
                <label className="form-label">Category*</label>
              </div>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Category"
                name="Category"
                value={input.Category}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Short Descrip*</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="shortdescrip"
                value={input.shortdescrip}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3 ">
              <label className="form-label">Image*</label>
              <br />
              <input
                type="file" 
                accept="image/*"
                id="file-input"
                name="Image"
                onChange={(e)=>ImageHandler(e) }
              />{" "}
             {input.Image && <img src={input.Image} alt={input.Image} width ="100px" height="100px"></img>} 
            </div>

            {/* <div className="mb-3 ">
              <label className="form-label">Image*</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter food image URL"
                name="Image"
                onChange={handleChange}
              />
              <img src={input.Image} alt={input.Image} width="200px" height="200"></img>
            </div> */}

            <div className="mb-3 "> 
              <label className="form-label"> Add your reacipe video Link</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="videolink"
                name="videolink"
                value={input.videolink}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 ">
              <label className="form-label">
                Add your reacipe Social Meadia Link
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="socialmedialink"
                name="socialmedialink"
                value={input.socialmedialink}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 ">
              <span className="input-group-text ">Timing*</span>
              <div className="input-group">
                <span className="input-group-text">Prep:</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  name="prep"
                  value={input.prep}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Cook mins:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="cookmins"
                  value={input.cookmins}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Additional mins: </span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="additionalmins"
                  value={input.additionalmins}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Total Time:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="totaltime"
                  value={input.totaltime}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Servings:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="servings"
                  value={input.servings}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Yield:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="yield"
                  value={input.yield}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">description*</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="description"
                value={input.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">Ingredients*</span>
                <input
                  type="text"
                  className="form-control"
                  name="ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={addingredients}
                >
                  Add
                </button>
              </div>
              <div>
                <ul>
                  {input?.ingredients?.length > 0 &&
                    input?.ingredients.map((item, index) => {
                      return (
                        <div key={index}>
                          <div>
                            <li className="fs-5">{item}</li>
                          </div>
                          <br />
                        </div>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-3">
                <span className="input-group-text">Add Step for recipe*</span>
                <div className="input-group mb-3">
                  <span className="input-group-text">Directions</span>
                  <input
                    type="text"
                    className="form-control"
                    name="directions"
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                    onClick={addDirections}
                  >
                    Add Step
                  </button>
                </div>
                <div>
                  {input?.directions?.length > 0 &&
                    input.directions.map((item, index) => {
                      return (
                        <div key={index}>
                          <div>
                            <input type="checkbox" className="rounded " />
                            &nbsp;
                            <label className="fs-5 fw-bold">
                              Step {++index}{" "}
                            </label>
                            <p>{item}</p>
                          </div>
                          <br />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Chef's Notes*</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="chefnote"
                value={input.chefnote}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Nutrition Facts* </label>
              <div className="input-group">
                <span className="input-group-text">Per Serving:</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  name="nutritionfacts"
                  value={nutrition}
                  onChange={(e) => setNutrition(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={addNutrition}
                >
                  Add Nutrition Facts
                </button>
              </div>
              <div>
                {input?.nutritionfacts?.length > 0 &&
                  input.nutritionfacts.map((item, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <label className="fs-5">{item}</label>
                        </div>
                        <br />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto m-2">
              <button
                type="button"
                value="Upload"
                className="btn btn-outline-success border-3 center"
                onClick={handleSubmit}
              >
                Submit your recipe
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
