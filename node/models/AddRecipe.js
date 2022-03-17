var connection = require("../config/DB");

var recipe = function (recipe) {
  this.UID = recipe.UID
  this.Name = recipe.Name;
  this.Category = recipe.Category;
  this.ShortDes = recipe.ShortDes;
  this.Image = recipe.Image;
  this.Video = recipe.Video;
  this.SocialMedia = recipe.SocialMedia;
  this.Prep = recipe.Prep;
  this.CookMins = recipe.CookMins;
  this.AdditionalMins = recipe.AdditionalMins;
  this.TotalTime = recipe.TotalTime;
  this.Servings = recipe.Servings;
  this.Yield = recipe.Yield;
  this.description = recipe.description;
  this.ingredients = [recipe.ingredients];
  this.Directions = recipe.Directions;
  this.ChefNote = recipe.ChefNote;
  this.Nutrition = recipe.Nutrition;
  // this.created_at = new Data();
};

recipe.create = (data, cb) => {
  connection.query(
    "Insert Into userrecipe set ?",
    [data],
    function (error, result, field) {
      if (error) {
        cb(error);
      }
      cb(null, { message: "added" });
      console.log("Data Added ");
    }
  );
};


recipe.findall = (cb) => {
  let queryselect = "select * from userrecipe";
  connection.query(queryselect, function (err, result, field) {
    if (err) {
      cb(null.err);
    }
    cb(null, result);
  });
  console.log("data show");
};

recipe.findByID = (id, cb) => {
  connection.query(
    "select * from userrecipe where UID =?",
    [id],
    function (error, result, field) {
      if (error) {
        cb(null.error);
      }
      cb(null, result);
      console.log("data show by UID");
    }
  );
};

recipe.update = (data,id,cb) => {
  connection.query(
    "Update userrecipe set Name =? , Category =? , ShortDes =? , Prep =? , CookMins =? , AdditionalMins =? , TotalTime =? , Servings =? , Yield=? , ingredients=? , description=? , Directions=? , ChefNote=? , Nutrition=? , Image=? , Video=? , SocialMedia=?  where UID=?",
         
    [
      data.Name,
      data.Category,
      data.ShortDes,
      data.Prep,
      data.CookMins,
      data.AdditionalMins,
      data.TotalTime,
      data.Servings,
      data.Yield,
      data.ingredients,
      data.description,
      data.Directions,
      data.ChefNote,
      data.Nutrition,
      data.Image,
      data.Video,
      data.SocialMedia,
      id,
    ],
    function (error, result, field) {
      if (error) {
        cb(null.error); 
      }
      cb(null, {message:'updated'});
      console.log("data show by UID");
    }
  );
};

recipe.delete = (id, cb) => {
  connection.query(
    "delete from userrecipe where UID =?",
    [id],
    function (error, result, field) {
      if (error) {
        cb(null.error);
      }
      cb(null, result);
      console.log("deleted ");
    }
  );
};





module.exports = recipe;
