import React from "react";
import { useNavigate } from 'react-router';

function RecipeForm({logoutx}) {
  const [input, setInput] = React.useState({
    id: Math.random(),
    nameofrecipe: "",
    shortdescrip: "",
    prep: "",
    cookmins: "",
    additionalmins: "",
    totaltime: "",
    servings: "",
    yield: "",
    description: "",
    ingredients: "",
    directions: "",
    chefnote: "",
    nutritionfacts: "",
  });

  const [ingredients, setIngredients] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [nutrition, setNutrition] = React.useState([]);
  const [submit, setSubmit] = React.useState([input]);
  const [dummy, setDummy] = React.useState([]);

  console.log("inputtttttttttt", input);
  console.log("description", description);
  console.log("ingredients", ingredients);
  console.log("nutrition", nutrition);
  console.log("submit", submit);
  console.log("dummy", dummy);

  const handleChange = (props) => {
    setInput({
      ...input,
      [props.target.name]: props.target.value,
    });
  };

  const addingredients = (props) => {
    if (input !== "") {
      setIngredients([...ingredients, input]);
      setDummy([...dummy, input.ingredients]);
      setInput({
        ...input,
        id: Math.random(),
        ingredients: "",
      });
    }
  };
  const addDirections = (props) => {
    if (input !== "") {
      setDescription([...description, input]);
      setDummy([...dummy, input.description]);

      setInput({
        id: Math.random(),
        description: "",
      });
    }
  };

  const addNutrition = (props) => {
    if (input !== "") {
      setNutrition([...nutrition, input]);
      setDummy([...dummy, input.nutritionfacts]);

      setInput({
        id: Math.random(),
        nutritionfacts: "",
      });
    }
  };
  const data = JSON.stringify(localStorage.getItem("recipe"));
  const handleSubmit = () => {
    localStorage.setItem("recipe",dummy);
    setSubmit(input);

  };

  
  return (
    <div className="container">
      <h1 className="text-center">Add Recipe Form</h1>
     
      <div className=" border-top  border-bottom  border-primary  border-3 rounded m-3">
        <div className="mb-3 ">
          <label className="form-label">Name Of Recipe</label>
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

        <div className="mb-3">
          <label className="form-label">Short Descrip</label>
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
        <label className="form-label">Image</label><br/>
          <input type="file" id="file-input" name="Image"  onChange={handleChange} />{" "}
        </div>

        <div className="mb-3 ">
          <label className="form-label"> add your reacipe video Link</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="videolink"
            name="videolink"
            // value={input.nameofrecipe}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label">add your reacipe Social Meadia Link</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="socialmedialink"
            name="socialmedialink"
            // value={input.videolink}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 ">
          <span className="input-group-text ">Timing</span>
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
          <label className="form-label">description</label>
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
            <span className="input-group-text">Ingredients</span>
            <input
              type="text"
              className="form-control"
              name="ingredients"
              value={input.ingredients}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={(props) => addingredients(props)}
            >
              Add
            </button>
          </div>
          <div>
            <ul>
            {ingredients.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                   
                    <li className="fs-5">{item.ingredients}</li>
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
            <span className="input-group-text">Add Step for recipe</span>
            <div className="input-group mb-3">
              <span className="input-group-text">Directions</span>
              <input
                type="text"
                className="form-control"
                name="directions"
                value={input.directions}
                onChange={handleChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                onClick={(props) => addDirections(props)}
              >
                Add Step
              </button>
            </div>
            <div>
              {description.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div>
                      <input type="checkbox" className="rounded " />
                      &nbsp;
                      <label className="fs-5 fw-bold">Step {++index} </label>
                      <p>{item.directions}</p>
                    </div>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Chef's Notes:</label>
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
          <label className="form-label">Nutrition Facts</label>
          <div className="input-group">
            <span className="input-group-text">Per Serving:</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              name="nutritionfacts"
              value={input.nutritionfacts}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={(props) => addNutrition(props)}
            >
              Add Nutrition Facts
            </button>
          </div>
          <div>
            {nutrition.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <label className="fs-5">{item.nutritionfacts}</label>
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
            className="btn btn-outline-success border-3 center"
            onClick={handleSubmit}
          >
            Submit your recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeForm;
