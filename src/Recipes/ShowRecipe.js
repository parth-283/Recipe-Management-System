import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import ShowRecipeAPI from "./ShowRecipeAPI";

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

function ShowRecipe() {
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
    console.log("RESPONSE", response);
  };

  const updatesearch = (e) => {
    setSearch(e.target.value);
    console.log("search", e.target.value);
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
            <div
              className="card-body"
              style={{ display: "flex", justifyContent: " center" }}
            >
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

                    <div className="">
                      <Grid>
                        {recipe.map((recipe) => (
                          <Grid item xs={12}>
                            <ShowRecipeAPI
                              key={recipe.recipe.label}
                              title={recipe.recipe.label}
                              calories={recipe.recipe.calories}
                              image={recipe.recipe.image}
                              ingredients={recipe.recipe.ingredients}
                              shareAs={recipe.recipe.shareAs}
                              source={recipe.recipe.source}
                              mealType={recipe.recipe.mealType}
                              dishType={recipe.recipe.dishType}
                              cautions={recipe.recipe.cautions}
                              cuisineType={recipe.recipe.cuisineType}
                              dietLabels={recipe.recipe.dietLabels}
                              totalTime={recipe.recipe.totalTime}
                              totalWeight={recipe.recipe.totalWeight}
                              yields={recipe.recipe.yield}
                              totalNutrients={recipe.recipe.totalNutrients}
                              healthLabels={recipe.recipe.healthLabels}
                              url={recipe.recipe.url}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipe;
