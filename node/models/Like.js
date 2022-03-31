var connection = require("../config/DB");

var like = function (like) {
  this.UID = like.UID;
  this.RecipeID = like.RecipeID;
  this.UserID = like.UserID;
  this.Likes = like.Likes;
  // this.created_at = new Data();
};

like.create = (data, cb) => {
  connection.query(
    "Insert Into likerecipe set ?",
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

like.findall = (cb) => {
  let queryselect = "select * from likerecipe";
  connection.query(queryselect, function (err, result, field) {
    if (err) {
      cb(null.err);
    }
    cb(null, result);
  });
  console.log("data show");
};

like.findByID = (id, cb) => {
  connection.query(
    "select * from likerecipe where UID =?",
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

like.update = (data, id, cb) => {
  connection.query(
    "Update likerecipe set RecipeID =?, UserID =? , Likes =?   where UID=?",
    [data.RecipeID, data.UserID, data.Likes, id],
    function (error, result, field) {
      if (error) {
        cb(null.error);
      }
      cb(null, { message: "updated" });
      console.log("data show by UID");
    }
  );
};

like.delete = (id, cb) => {
    connection.query(
      "delete from likerecipe where UID =?",
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

module.exports = like;
