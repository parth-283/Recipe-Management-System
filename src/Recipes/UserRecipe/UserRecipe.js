import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../style/UserRecipe.css";
import { Modal } from "react-bootstrap";

function UserRecipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [like, setLike] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [commentRecipeID, setCommentRecipeID] = React.useState(0);
  const [showCommentData, setShowCommentData] = React.useState([]);
  const [showLoderRecipe, setShowLoderRecipe] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  let commentResult = [];
  // console.log("recipe", recipe);

  //user login data get on localstorage
  let reg = localStorage.getItem("login-user-info");
  let regdata = JSON.parse(reg);
  let UserId = regdata[0].element.UID;
  let UserFName = regdata[0].element.FName;
  let UserLName = regdata[0].element.LName;
  let UserName = UserFName + " " + UserLName;

  // console.log("userid", UserId);

  //like
  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    //get comment data and set in recipe blog
    let C = await fetch("http://localhost:4500/comment/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log('"getCommentData",error', error));

    // get like data and set in recipe blog
    let p = await fetch("http://localhost:4500/like/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));

    // get recipe data and modify
    fetch("http://localhost:4500/recipe/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        // console.log("RecipeData", getdata);
        let x = getdata.map((item) => {
          let ingredientsdata = item.ingredients.split(",");
          let directionsdata = item.directions.split(".,");
          let Nutritiondata = item.Nutrition.split(",");
          let likedata = p.find(
            (item2) => item2.RecipeID == item.UID && item2.UserID == UserId
          );
          let likelengthdata = p.filter(
            (item3) => item3.RecipeID == item.UID && item3.Likes == "true"
          );
          let commentdata = C.filter((item4) => item4.RecipeID == item.UID);
          return {
            ...item,
            ingredients: ingredientsdata,
            directions: directionsdata,
            Nutrition: Nutritiondata,
            likedata: likedata,
            likelengthdata: likelengthdata,
            commentdata: commentdata,
          };
        });
        setRecipe(x);
        setShowLoderRecipe(true);
      });
  };

  // console.log("recipe", recipe);

  React.useEffect(() => {
    fetchData();
  }, [like]);

  async function handlelike(e) {
    // get like data and set uid
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
  }

  //like
  const addlike = async (data, value) => {
    //set like
    let likefind = value.find(
      (item) => item.RecipeID == data.RecipeID && item.UserID == data.UserID
    );

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
          .then((response) => response.json())
          .then((result) => {
            if (like == false) {
              setLike(true);
            } else {
              setLike(false);
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
          .then((response) => response.json())
          .then((result) => {
            if (like == false) {
              setLike(true);
            } else {
              setLike(false);
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
      if (result) {
        if (like == false) {
          setLike(true);
        } else {
          setLike(false);
        }
      }
      console.log("resultyyyyyyyy", result);
    }
  };

  // Delete Recipe
  const delteRecipe = (id) => {
    console.log(id);
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    //Delete Recipe 
    fetch(`http://localhost:4500/recipe/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("deleteRecipe", result))
      .catch((error) => console.log("error", error));
    //Delete comments
    fetch(`http://localhost:4500/comment/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("deleteRecipe", result))
      .catch((error) => console.log("error", error));
    //Delete Like
    fetch(`http://localhost:4500/like/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("deleteRecipe", result))
      .catch((error) => console.log("error", error));

    fetchData();
  };

  //Comment
  const handleCommentList = (e, data) => {
    console.log("e,data", e, data);
    setShow2(true);
    setCommentRecipeID(e);
    setShowCommentData(data);
  };

  function Changecomment(e) {
    //set comment text value
    setComment(e.target.value);
  }

  async function addhandlecommet(e) {
    // get comment data and set uid
    let max = 0;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch("http://localhost:4500/comment/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          if (max < element.CID) {
            max = element.CID;
          }
        }
        let commentgetdata = {
          UserID: UserId,
          UserName: UserName,
          RecipeID: commentRecipeID,
          Comments: comment,
          CID: ++max,
        };
        commentResult = result;
        // console.log("commentResult", commentResult);
        addcommnet([commentgetdata, result]);
      })
      .catch((error) => console.log("error", error));
  }

  async function addcommnet(data) {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(
      `http://localhost:4500/comment/add?CID=${data[0].CID}&RecipeID=${data[0].RecipeID}&UserID=${data[0].UserID}&UserName=${data[0].UserName}&Comments=${comment}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("CommentAddResult...///", data);
        setShowCommentData([...showCommentData, data[0]]);
      })
      .catch((error) => console.log("error", error));
    setComment("");
    fetchData();
  }

  const handleclick = (value) => {
    let url = value.target.value;
    window.open(url);
  };
  const handlerror = (value) => {
    let data = value.target.value;
    alert(data);
  };

  for (let counting = 1; counting < recipe.length; counting++) {
    const element = recipe[counting];
    console.log("element", element.UID);
  }
  return (
    <>
      {!showLoderRecipe === true ? (
        <div className="spinner-align">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {recipe
            .map((recipe) => (
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
                    <div>{recipe.Adddate}</div>

                    <div className="m-2 ">
                      <div className="container">
                        {/* User Info */}
                        <div>
                          <label className="fs-5 fw-bold">ChefName: </label>
                          <label className="fs-5">{recipe.ChefName}</label>
                        </div>
                        <div className="row row-cols-3">
                          <div className="row row-cols-1">
                            {/* Like */}
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
                            <div className="col text-center">
                              {recipe.likelengthdata.length}
                            </div>
                          </div>
                          {/* Comment */}
                          <div className="row row-cols-1">
                            <div className="col">
                              {/* <!-- Button trigger modal --> */}
                              <button
                                aria-label="Comment"
                                style={{ color: "#64b5f6" }}
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={(e) =>
                                  handleCommentList(
                                    `${recipe.UID}`,
                                    recipe.commentdata
                                  )
                                }
                              >
                                <AddCommentIcon />
                              </button>

                              <div className="">
                                <Modal
                                  size="lg"
                                  show={show2}
                                  onHide={() => setShow2(false)}
                                  aria-labelledby="example-modal-sizes-title-lg"
                                  // style={{ marginLeft: "9%", paddingTop: "5%" }}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                      Comment
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="form-floating ">
                                      <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                        name="commentinput"
                                        value={comment}
                                        onChange={(e) => Changecomment(e)}
                                      ></textarea>
                                      <label htmlFor="floatingTextarea">
                                        Comments
                                      </label>
                                    </div>
                                    <div className="setcontent">
                                      {showCommentData &&
                                        showCommentData.length > 0 &&
                                        showCommentData
                                          .reverse()
                                          .map((item) => (
                                            <div className="border border-2 border-primary rounded my-2">
                                              <label>
                                                <AccountCircleIcon />
                                                {item.UserName}
                                              </label>
                                              <br />
                                              <label>
                                                <ForwardOutlinedIcon />
                                                {item.Comments}
                                              </label>
                                            </div>
                                          ))}
                                    </div>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <div className="">
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={(e) =>
                                          addhandlecommet(`${recipe.UID}`)
                                        }
                                      >
                                        Add Comment
                                      </button>
                                      {/* <button
                                        type="button"
                                        className="btn btn-secondary mx-2"
                                        data-bs-dismiss="modal"
                                        onclick={() => setShow2(false)}
                                      >
                                        Close
                                      </button> */}
                                    </div>
                                  </Modal.Footer>
                                </Modal>
                              </div>

                              {/* <!-- Modal --> */}
                              <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content contentsize"></div>
                                </div>
                              </div>
                            </div>

                            <div className="col text-center">
                              {recipe.commentdata.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Ingredient</h4>

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
                            <td>
                              {recipe.CookMins === 0 ? "-" : recipe.CookMins}
                            </td>
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
                            <td>
                              {recipe.TotalTime === 0 ? "-" : recipe.TotalTime}
                            </td>
                            <td>
                              {recipe.Servings === 0 ? "-" : recipe.Servings}
                            </td>
                            <td>{recipe.Yield === 0 ? "-" : recipe.Yield}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="">
                        <label className="fs-6 fw-bold ">Preserved: </label>{" "}
                        <span className="">{recipe.Preserved}</span>
                      </div>
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
                      <hr />

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

                      {recipe.SocialMedia === "" ? (
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
                      {/* Delete */}
                      {UserName === recipe.ChefName ? (
                        <button
                          aria-label="Delete"
                          className=" mx-2 btn btn-outline-danger"
                          onClick={(e) => delteRecipe(`${recipe.UID}`)}
                        >
                          <DeleteIcon sx={{ color: "#ba000d" }} />
                          Delete Recipe
                        </button>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      )}
    </>
  );
}

export default UserRecipe;
