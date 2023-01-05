const like = require("../models/like");

var addlike = (req, res) => {
    // console.log(req.body,"...........");
    let data = new like(req.query);
    console.log(data);
    like.create(data, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var likelist = (req, res) => {
    like.findall(function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var likeinfo = (req, res) => {
    like.findByID(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var likeupdate = (req, res) => {
    let data = new like(req.query);
    console.log("data", data);
    like.update(data, req.params.id, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  var likeDelete = (req, res) => {
    like.delete(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

  module.exports = {
    likelist,
    addlike,
    likeinfo,
    likeupdate,
    likeDelete
   };