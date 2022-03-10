var connection = require("../config/DB");

var feedbacks = function (feedbacks) {
  this.UID = feedbacks.UID
  this.Name = feedbacks.Name;
  this.Phone = feedbacks.Phone;
  this.Email = feedbacks.Email;
  this.Message = feedbacks.Message;
  // this.created_at = new Data();
};

feedbacks.create = (data, cb) => {
    connection.query(
      "Insert Into feedback set ?",
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

feedbacks.findall = (cb) => {
    let queryselect = "select * from feedback";
    connection.query(queryselect, function (err, result, field) {
      if (err) {
        cb(null.err);
      }
      cb(null, result);
    });
    console.log("data show");
  };


  feedbacks.findByID = (id, cb) => {
    connection.query(
      "select * from feedback where UID =?",
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


  feedbacks.update = (data,id,cb) => {
    connection.query(
      "Update feedback set Name =?, Phone =? , Email =? ,  Message =?  where UID=?",
      [
        data.Name,
        data.Phone,
        data.Email,
        data.Message,
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


  feedbacks.delete = (id, cb) => {
    connection.query(
      "delete from feedback where UID =?",
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


module.exports = feedbacks;
