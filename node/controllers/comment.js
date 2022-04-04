const comment = require("../models/comment");

var addcomment = (req, res) => {
    // console.log(req.body,"...........");
    let data = new comment(req.query);
    console.log(data);
    comment.create(data, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var commentlist = (req, res) => {
    comment.findall(function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var commentinfo = (req, res) => {
    comment.findByID(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var commentupdate = (req, res) => {
    let data = new comment(req.query);
    console.log("data", data);
    comment.update(data, req.params.id, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var commentDelete = (req, res) => {
    comment.delete(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };
  // 
  module.exports = {
    commentlist,
    addcomment,
    commentinfo,
    commentupdate,
    commentDelete
   };