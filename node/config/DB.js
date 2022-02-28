var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipe",
});

connection.connect(function (err) {
  if (err) {
    console.log("error" + err);
  } else {
    console.log("Db connected");
  }
});

module.exports = connection

