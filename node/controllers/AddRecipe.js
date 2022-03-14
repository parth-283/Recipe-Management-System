const recipe = require("../Models/AddRecipe");

var addrecipe = (req, res) => {
  // console.log(req.body,"...........");
  let data = new recipe(req.query);
  console.log(data);
  recipe.create(data, function (error, result, field) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};


var recipelist = (req, res) => {
    recipe.findall(function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var recipeinfo = (req, res) => {
    recipe.findByID(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var recipeupdate = (req, res) => {
    let data = new recipe(req.query);
    console.log("data", data);
    recipe.update(data, req.params.id, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var recipeDelete = (req, res) => {
    recipe.delete(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };





module.exports = {
    addrecipe,
    recipelist,
    recipeinfo,
    recipeupdate,
    recipeDelete,
  };