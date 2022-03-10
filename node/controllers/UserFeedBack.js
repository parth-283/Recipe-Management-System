const feedbacks = require("../models/UserFeedBack");



var addfeedback = (req, res) => {
    // console.log(req.body,"...........");
    let data = new feedbacks(req.query);
    console.log(data);
    feedbacks.create(data, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };

var feedbacklist = (req, res) => {
    feedbacks.findall(function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };


  
var feedbackinfo = (req, res) => {
    feedbacks.findByID(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };



  var feedbackupdate = (req, res) => {
    let data = new feedbacks(req.query);
    console.log("data", data);
    feedbacks.update(data, req.params.id, function (error, result, field) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };


  var feedbackDelete = (req, res) => {
    feedbacks.delete(req.params.id, function (error, result) {
      if (error) {
        res.send(error);
      }
      res.json(result);
    });
  };



  module.exports = {
   feedbacklist,
   addfeedback,
   feedbackinfo,
   feedbackupdate,
   feedbackDelete
  };