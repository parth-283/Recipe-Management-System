const users = require("../Models/UserRegister");

var adduser = (req, res) => {
  // console.log(req.body,"...........");
  let data = new users(req.query);
  console.log(data);
  users.create(data, function (error, result, field) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};


var userlist = (req, res) => {
  users.findall(function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var userinfo = (req, res) => {
  users.findByID(req.params.id, function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var userupdate = (req, res) => {
  let data = new users(req.query);
  console.log("data", data);
  users.update(data, req.params.id, function (error, result, field) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var userDelete = (req, res) => {
  users.delete(req.params.id, function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var userprofile = (req, res) => {
  console.log("fileDetailes",req.file);
    res.json({message:'uploaded'});
};

module.exports = {
  adduser,
  userlist,
  userinfo,
  userupdate,
  userDelete,
  userprofile
};
