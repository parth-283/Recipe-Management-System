import React from "react";

function RecipeForm() {
  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState("");
  const [directions, setDirections] = React.useState("");
  const [nutrition, setNutrition] = React.useState("");
  const [simage, setImage] = React.useState("");
  const [showimage, setShowimage] = React.useState("");
  const [imageurl, setImageurl] = React.useState("");
  console.log("imageurl", imageurl);
  console.log("recipe......................", recipe);
  const [input, setInput] = React.useState({
    UID: 600,
    // UID: Math.random().toString().substr(4, 4),
    Name: "",
    Category: "",
    imageurl: "",
    ShortDes: "",
    Prep: "",
    CookMins: "",
    AdditionalMins: "",
    TotalTime: "",
    Servings: "",
    Yield: "",
    ingredients: [],
    description: "",
    directions: [],
    ChefNote: "",
    Nutrition: "",
    Video: "",
    SocialMedia: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const ImageHandler = async (e) => {
    setImage(e.target.files[0]);
    let reader = new FileReader(e.target.files[0]);
    reader.onloadend = () => {
      setShowimage({ ...showimage, Image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
    setShowimage({ ...showimage, Image: e.target.files[0] });
    setImageurl(
      `http://localhost:4500/profile/Recipe-${e.target.files[0].name}`
    );
    
  };

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
      if (input.Nutrition.length > 0) {
        const dummyNutrition = [...input.Nutrition];
        dummyNutrition.push(nutrition);
        setInput({
          ...input,
          Nutrition: dummyNutrition,
        });
        setNutrition("");
      } else {
        setInput({
          ...input,
          Nutrition: [nutrition],
        });
        setNutrition("");
      }
    }
  };
  async function handleimage(params) {
    //send image to backend.
    console.log("simage546666666666666666666666666", simage);
    var formdata = new FormData();
    formdata.append("profile", simage);
    const data = await fetch("http://localhost:4500/recipe/image", {
      method: "post",
      body: formdata,
    });
    const uploadedImage = await data.json();
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }


  console.log("imageurl", imageurl);
    setInput({
      ...input,
      imageurl: imageurl,
    });
  }
  async function handleSubmit(event) {
    console.log("input submit", input);

    //send data to backend.
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    let resultdata = await fetch(
      `http://localhost:4500/recipe/add?UID=${input.UID}&Name=${input.Name}&Category=${input.Category}&imageurl=${input.imageurl}&ShortDes=${input.ShortDes}&Prep=${input.Prep}&CookMins=${input.CookMins}&AdditionalMins=${input.AdditionalMins}&TotalTime=${input.TotalTime}&Servings=${input.Servings}&Yield=${input.Yield}&ingredients=${input.ingredients}&description=${input.description}&directions=${input.directions}&ChefNote=${input.ChefNote}&Nutrition=${input.Nutrition}&Video=${input.Video}&SocialMedia=${input.SocialMedia}`,
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
      <form>
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
                name="Name"
                value={input.Name}
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
                name="ShortDes"
                value={input.ShortDes}
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
                // onChange={handleChange}
                onChange={(e) => ImageHandler(e)}
              />{" "}
              {showimage.Image && (
                <img
                  src={showimage.Image}
                  alt="hii"
                  width="100px"
                  height="100px"
                ></img>
              )}
              {showimage.Image && (
                <button
                  type="button"
                  value="Upload"
                  className="btn btn-outline-success center mx-2"
                  onClick={handleimage}
                >
                  Add image
                </button>
              )}
            </div>

            <div className="mb-3 ">
              <label className="form-label"> Add your reacipe video Link</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Video"
                name="Video"
                value={input.Video}
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
                placeholder="SocialMedia"
                name="SocialMedia"
                value={input.SocialMedia}
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
                  name="Prep"
                  value={input.Prep}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Cook mins:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="CookMins"
                  value={input.CookMins}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Additional mins: </span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="AdditionalMins"
                  value={input.AdditionalMins}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Total Time:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="TotalTime"
                  value={input.TotalTime}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Servings:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="Servings"
                  value={input.Servings}
                  onChange={handleChange}
                />
                <span className="input-group-text"> Yield:</span>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  name="Yield"
                  value={input.Yield}
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
                <span className="input-group-text">Ingredients & measurement*</span>
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
                name="ChefNote"
                value={input.ChefNote}
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
                  name="Nutrition"
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
                {input?.Nutrition?.length > 0 &&
                  input.Nutrition.map((item, index) => {
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
