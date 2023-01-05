var connection = require("../config/DB");

var users = function (users) {
  this.UID = users.UID
  this.FName = users.FName;
  this.LName = users.LName;
  this.Gender = users.Gender;
  this.State = users.State;
  this.City = users.City;
  this.Email = users.Email;
  this.Mobile = users.Mobile;
  this.Password = users.Password;
  this.Status = users.Status;
  this.likes = users.likes;
  
 
  // this.created_at = new Data();
};

users.create = (data, cb) => {
  connection.query(
    "Insert Into userregister set ?",
    [data],
    function (error, result, field) {
      if (error) {
        cb(error);
      }
      cb(null, { message: "added" });
      console.log("users Added ");
    }
  );
};
users.findall = (cb) => {
  let queryselect = "select * from userregister";
  connection.query(queryselect, function (err, result, field) {
    if (err) {
      cb(null.err);
    }
    cb(null, result);
  });
  console.log("users show");
};

users.findByID = (id, cb) => {
  connection.query(
    "select * from userregister where UID =?",
    [id],
    function (error, result, field) {
      if (error) {
        cb(null.error);
      }
      cb(null, result);
      console.log("users show by UID");
    }
  );
};


users.update = (data,id,cb) => {
  connection.query(
    "Update userregister set FName =? , LName =? , Gender =? , State =? , City =? , Email =? , Mobile =? , Password =? , Status=? , likes=?  where UID=?",
    [
      data.FName,
      data.LName,
      data.Gender,
      data.State,
      data.City,
      data.Email,
      data.Mobile,
      data.Password,
      data.Status,
      data.likes,
      id,
    ],
    function (error, result, field) {
      if (error) {
        console.log("error",error);
        cb(null.error); 
      }
      cb(null, {message:'updated'});
      console.log("users updated");
    }
  );
};




users.delete = (id, cb) => {
  connection.query(
    "delete from userregister where UID =?",
    [id],
    function (error, result, field) {
      if (error) {
        cb(null.error);
      }
      cb(null, result,{message:'Deleted'});
      console.log("users deleted ");
    }
  );
};

module.exports = users;
