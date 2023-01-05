var connection = require("../config/DB");

var comment = function (comment) {
  this.CID = comment.CID;
  this.RecipeID = comment.RecipeID;
  this.UserID = comment.UserID;
  this.UserName = comment.UserName;
  this.Comments = comment.Comments;
  // this.created_at = new Data();
};

comment.create = (data, cb) => {
  connection.query(
    "Insert Into comment set ?",
    [data],
    function (error, result, field) {
      if (error) {
        cb(error);
      }
      cb(null, { message: "added" });
      console.log("comment Added ");
    }
  );
};
  
  comment.findall = (cb) => {
    let queryselect = "select * from comment";
    connection.query(queryselect, function (err, result, field) {
      if (err) {
        cb(null.err);
      }
      cb(null, result);
    });
    console.log("comment show");
  };

  comment.findByID = (id, cb) => {
    connection.query(
      "select * from comment where CID =?",
      [id],
      function (error, result, field) {
        if (error) {
          cb(null.error);
        }
        cb(null, result);
        console.log("comment show by CID");
      }
    );
  };

  comment.update = (data, id, cb) => {
    connection.query(
      "Update comment set RecipeID =?, UserID =? , UserName=? , Comments =?   where UID=?",
      [data.RecipeID, data.UserID, data.UserID, data.Comments, id],
      function (error, result, field) {
        if (error) {
          cb(null.error);
        }
        cb(null, { message: "updated" });
        console.log("comment updated");
      }
    );
  };

  comment.delete = (id, cb) => {
    connection.query(
      "delete from comment where RecipeID =?",
      [id],
      function (error, result, field) {
        if (error) {
          cb(null.error);
        }
        cb(null, result);
        console.log("comment deleted ");
      }
    );
  };

module.exports = comment;
