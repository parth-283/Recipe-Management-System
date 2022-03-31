import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";

function UserRecipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [likedata, setLikedata] = React.useState([]);
  const [like, setLike] = React.useState(false);
  let reg = localStorage.getItem("login-user-info");
        let regdata = JSON.parse(reg);
        let UserId = regdata[0].element.UID;



  console.log("userid", UserId);

  const fetchData =async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let p = await fetch("http://localhost:4500/like/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));


    fetch("http://localhost:4500/recipe/list")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((getdata) => {
        console.log("getdata", getdata);
        let x = getdata.map((item) => {
          let ingredientsdata = item.ingredients.split(",");
          let directionsdata = item.directions.split(".");
          let Nutritiondata = item.Nutrition.split(",");
          let likedata = p.find((item2)=>item2.RecipeID == item.UID && item2.UserID == UserId )
          let likelengthdata = p.filter((item3)=>item3.RecipeID == item.UID && item3.Likes == "true" )
          return {
            ...item,
            ingredients: ingredientsdata,
            directions: directionsdata,
            Nutrition: Nutritiondata,
            likedata: likedata,
            likelengthdata: likelengthdata
          };
          // directions
        });

        setRecipe(x);
      });
  };
console.log("recipe",recipe);
  React.useEffect(() => {
    fetchData();
  }, [like]);

  const handleclick = (value) => {
    let url = value.target.value;
    window.open(url);
  };
  const handlerror = (value) => {
    let data = value.target.value;
    alert(data);
  };

  async function likesdata() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let x = await fetch("http://localhost:4500/like/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLikedata(result);
        return result;
      })
      .catch((error) => console.log("error", error));
    if (x == true) {
      return x;
    }
  }
  console.log("likesdata", likedata);

  async function handlelike(e) {
   
    let max = 0;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let x = await fetch("http://localhost:4500/like/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          if (max < element.UID) {
            max = element.UID;
          }
        }
        

        
        addlike(
          { UserID: UserId, RecipeID: e, Likes: true, UID: ++max },
          result
        );
      })
      .catch((error) => console.log("error", error));
    console.log("xxxxxxxxxx", x);
  }
  console.log("like++++++++++++++", like);

  

  function handlecomment() {
    alert("add Comment");
  }

  const addlike = async (data, value) => {
    console.log("likeeeeeeeeeeeeeeeeeaddlike", data);
    console.log("resultttttttttttttttttttt", value);
    let likefind = value.find(
      
      (item) => item.RecipeID == data.RecipeID && item.UserID == data.UserID 
    );
    console.log("likefind", likefind);
    if (likefind != undefined) {
      if (likefind.Likes == "true") {
        var requestOptions = {
          method: "PUT",
          redirect: "follow",
        };

        fetch(
          `http://localhost:4500/like/update/${likefind.UID}?UID=${likefind.UID}&RecipeID=${likefind.RecipeID}&UserID=${likefind.UserID}&Likes=false`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            if(like==false){
              setLike(true)
            }else{
              setLike(false)
            }
          })
          .catch((error) => console.log("error", error));
      } else {
        var requestOptions = {
          method: "PUT",
          redirect: "follow",
        };

        fetch(
          `http://localhost:4500/like/update/${likefind.UID}?UID=${likefind.UID}&RecipeID=${likefind.RecipeID}&UserID=${likefind.UserID}&Likes=true`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) =>  {
            if(like==false){
              setLike(true)
            }else{
              setLike(false)
            }
          })
          .catch((error) => console.log("error", error));
      }
  
    } else {
      let requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let resultdata = await fetch(
        `http://localhost:4500/like/add?UID=${data.UID}&RecipeID=${data.RecipeID}&UserID=${data.UserID}&Likes=${data.Likes}`,
        requestOptions
      );
      let result = await resultdata.json();
      if(result) {
        if(like==false){
          setLike(true)
        }else{
          setLike(false)
        }
      }
      console.log("resultyyyyyyyy", result);
    }
  };

  

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
                <div className="container">
                  <div className="row row-cols-3">
                    <div className="row row-cols-1">
                      <div className="col ">
                        <button
                          aria-label="Like"
                          onClick={(e) => handlelike(`${recipe.UID}`)}
                        >
                          {recipe?.likedata?.Likes == "true" ? (
                            <FavoriteIcon sx={{ color: "#ba000d" }} />
                          ) : (
                            <FavoriteBorderIcon />
                          )}

                        </button>

                        
                      </div>
                      <div className="col text-center">{recipe.likelengthdata.length}</div>
                    </div>
                    <div className="row row-cols-1">
                      <div className="col">
                        {" "}
                        <button
                          aria-label="Comment"
                          style={{ color: "#64b5f6" }}
                          onClick={handlecomment}
                        >
                          <AddCommentIcon />
                        </button>
                      </div>
                      <div className="col text-center">50</div>
                    </div>
                  </div>
                </div>
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
