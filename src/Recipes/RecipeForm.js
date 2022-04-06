import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "../style/RecipeForm.css";

function RecipeForm() {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  console.log("Date", date);
  console.log("current", current);

  let reg = localStorage.getItem("login-user-info");
  let regdata = JSON.parse(reg);
  let UserFName = regdata[0].element.FName;
  let UserLName = regdata[0].element.LName;
  let userName = UserFName + " " + UserLName;

  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState("");
  const [directions, setDirections] = React.useState("");
  const [nutrition, setNutrition] = React.useState("");
  const [simage, setImage] = React.useState("");
  const [showimage, setShowimage] = React.useState("");
  const [imageurl, setImageurl] = React.useState("");
  const [addAlertBox, setAddAlertBox] = React.useState(false);
  const [addImageAlertBox, setAddImageAlertBox] = React.useState(false);


  let max = 0;
  for (let i = 0; i < recipe.length; i++) {
    const element = recipe[i];
    if (max < element.UID) {
      max = element.UID;
    }
  }
  const [input, setInput] = React.useState({
    UID: ++max,
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
    ChefName: userName,
    AddDate: date,
    // preserved:"",
    preserving:"",
    preservingMeasure:"",
    preservin:"",
  });

  console.log("input", input);

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
      setAddImageAlertBox(true);
    } else {
      console.log("Error Found");
    }

    console.log("imageurl", imageurl);
    setInput({
      ...input,
      imageurl: imageurl,
    });
  }
  //Recipe Submit
  async function handleSubmit(event) {
    let value = { ...input, UID: max };
    let Preserved =`${input.preserving} ${input.preservingMeasure} in ${input.preservin} `
    // console.log("handleSubmit####input$$$%%", input);
    console.log("value####input$$$%%", value);
    // console.log(Preserved,"Preserved");
    // console.log(
    //   "value submit",
    //   value.Name,
    //   value.Category,
    //   value.imageurl,
    //   value.ingredients,
    //   value.directions
    // );

    //send data to backend.
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    };
    let resultdata = await fetch(
      `http://localhost:4500/recipe/add?UID=${value.UID}&Name=${value.Name}&Category=${value.Category}&imageurl=${value.imageurl}&ShortDes=${value.ShortDes}&Prep=${value.Prep}&CookMins=${value.CookMins}&AdditionalMins=${value.AdditionalMins}&TotalTime=${value.TotalTime}&Servings=${value.Servings}&Yield=${value.Yield}&ingredients=${value.ingredients}&description=${value.description}&directions=${value.directions}&ChefNote=${value.ChefNote}&Nutrition=${value.Nutrition}&Video=${value.Video}&SocialMedia=${value.SocialMedia}&ChefName=${value.ChefName}&AddDate=${value.AddDate}&Preserved=${Preserved}`,
      requestOptions
    );
    let result = await resultdata.json();
    if (result.message === "added") {
      setAddAlertBox(true);
      }
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


const preserving = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });

}


  return (
    <div className="container">
      <div></div>
      <h1 className="text-center">Add Recipe Form</h1>
      <form>
        <div className=" border-top  border-bottom  border-primary  border-3 rounded m-3 ">
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
                <label className="form-label ">Category*</label>
              </div>
              <select
                name="Category"
                className="Category"
                onChange={handleChange}
              >
                <option value="none" selected hidden>
                  Select your recipe's Category
                </option>

                <option className="vegetarian" value="vegetarian">
                  vegetarian
                </option>
                <option className="non-vegetarian" value="non-vegetarian">
                  non-vegetarian
                </option>
                <option className="Eggetarian" value="Eggetarian">
                  Eggetarian
                </option>
              </select>
              {/* <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Category"
                name="Category"
                value={input.Category}
                onChange={handleChange}
              /> */}

              {/* <div className="Categoryborder">
                {" "}
                <buttpn className=" rsveg">
                  <span className="veg" value="veg"></span>
                </buttpn>
                <sapn className="rsnonveg">
                  <span className="nonveg"value="nonveg"></span>
                </sapn>
              </div> */}
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
              {addImageAlertBox === true ? (
                <Alert variant="filled" severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Successfully uploaded image
                </Alert>
              ) : (
                <p></p>
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

            <div className="mb-3 ">
              <span className="input-group-text ">
                time to preserving food *
              </span>
              <div className="input-group">
                <span className="input-group-text ">Timing*</span>
                <div>
                  <input
                    type="number"
                    aria-label="preserving"
                    className="form-control"
                    name="preserving"
                    // value={input.preserving}
                    onChange={preserving}
                  />
                </div>

                  <select name="preservingMeasure" onChange={preserving} >
                    <option value="none" selected hidden>
                      preservingMeasure
                    </option>
                    <option className="hours" value="hours">
                      hours
                    </option>
                    <option className="min" value="Min">
                      Minute
                    </option>
                    <option className="days" value="days">
                      days
                    </option>
                  </select>
                <div>
                </div>
                
                  <select name="preservin" onChange={preserving}>
                    <option value="none" selected hidden>
                      preserving in...
                    </option>
                    <option value="RoomTemperature">Room Temperature</option>
                    <option value="refrigerator">refrigerator</option>
                    <option value="hotcase">hot case</option>
                  </select>
                <div>
                </div>
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
                <span className="input-group-text">
                  Ingredients & measurement*
                </span>
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
            <div className="my-2">
              {addAlertBox === true ? (
                <Alert variant="filled" severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Your Recipe Is Successfully Submitted
                </Alert>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
