import React, { useEffect, useState } from "react";
import axios from "axios";
// import Recipes from "./Recipes";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    margin: "10px auto",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function HeaderBottom() {
  const classes = useStyles();

  const App_ID = "76fa7c7c";
  const App_KEY = "f4dc5ebea60537e16e961e692f1ad339";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("veg");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    setRecipe(response.data.hits);
    // console.log("RESPONSE", response);
  };

  const updatesearch = (e) => {
    setSearch(e.target.value);
    // console.log("search", e.target.value);
  };

  const updatequery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <div className="card text-center">
        <div style={{ backgroundColor: "#4ab1ff" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  {/* <h5 className="card-title">Search Food Recipe</h5> */}
                  <div className="card-text">
                    <div className="input-group ">
                      <div>
                        <Paper
                          onSubmit={updatequery}
                          component="form"
                          className={classes.root}
                        >
                          <InputBase
                            type="text"
                            onChange={updatesearch}
                            value={search}
                            className={classes.input}
                            placeholder="Search for Recipe"
                            inputProps={{ "aria-label": "Search for Recipe" }}
                          />
                          <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                          >
                            <SearchIcon />
                          </IconButton>
                        </Paper>
                        <div>
                          <Grid container>
                            {recipe.map((recipe) => (
                              <Grid item xs={4}>
                                {/* <Recipes
                                  key={recipe.recipe.label}
                                  title={recipe.recipe.label}
                                  calories={recipe.recipe.calories}
                                  image={recipe.recipe.image}
                                  ingredients={recipe.recipe.ingredients}
                                /> */}
                              </Grid>
                            ))}
                          </Grid>
                        </div>
                      </div>
                      );
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-3 text-dark">
                <button
                  className="btn btn-outline-secondary  mx-3"
                  type="button"
                >
                  <b>🥣</b> Breakfast
                </button>
                <button
                  className="btn btn-outline-secondary  mx-3"
                  type="button"
                >
                  <b>🍲</b> Lunch
                </button>
                <button
                  className="btn btn-outline-secondary  mx-3"
                  type="button"
                >
                  <b>🍽️</b> Dinner
                </button>
                <button
                  className="btn btn-outline-secondary mx-3  "
                  type="button"
                >
                  🍨Dessert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
