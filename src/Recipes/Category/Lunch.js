import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Recipe from '../Recipe';

import Category from "../../Component/Home/Category";



const Lunch = () => {

  
  const App_ID = "76fa7c7c";
  const App_KEY = "f4dc5ebea60537e16e961e692f1ad339";

  const [recipe, setRecipe] = useState([]);
  const [showLoderTable, setShowLoderTable] = useState(false);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=lunch&app_id=${App_ID}&app_key=${App_KEY}`
    );
    setRecipe(response.data.hits);
    console.log("RESPONSE", response);
    if (response) {
      setShowLoderTable(true);
    }
  };


  return (
    <>
    <div className="card-body">
         <div className="card text-center">
           <div style={{ backgroundColor: "#4ab1ff" }}>
             <div className="container">
               <div className="col mt-4 text-dark">
                 <div>
                   <Category />
                 </div>
               </div>
               <div
       className="card text-center m-2"
       style={{ backgroundColor: "#4ab1ff" }}
     >
       <div className="card-header">
         <h1>Lunch</h1>
       </div>
               {!showLoderTable === true ? (
                 <div className="spinner-align">
                   <div
                     className="spinner-border spinner-border-sm"
                     role="status"
                   >
                     <span className="visually-hidden">Loading...</span>
                   </div>
                 </div>
               ) : (
                 <div className="card-body">
                   <div className="card-text">
                     <div className="input-group ">
                       <div>
                         <div>
                           <Grid container>
                             {recipe.map((recipe) => (
                               <Grid item xs={4}>
                                 <Recipe
                                   key={recipe.recipe.label}
                                   title={recipe.recipe.label}
                                   calories={recipe.recipe.calories}
                                   image={recipe.recipe.image}
                                   ingredients={recipe.recipe.ingredients}
                                 />
                               </Grid>
                             ))}
                           </Grid>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
  )
}

export default Lunch