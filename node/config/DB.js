var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipe",
});
// console.log("MySql",mysql);

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "id18651389_recipedata",
//   password: "sSEtPXGD8y~\]4uk",
//   database: "id18651389_recipe",
// });

// var connection = mysql.createConnection('mysql://id18651389_recipedata@2a02:4780:bad:c0de::13:rg_S{h}^A68UOnr|@localhost/id18651389_recipe?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
// var connection = mysql.createConnection('mysql://id18651389_recipedata@2a02:4780:bad:c0de::13:rg_S{h}^A68UOnr|@localhost/id18651389_recipe?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');


connection.connect(function (err) {
  if (err) {
    console.log("error" + err);
  } else {
    console.log("Db connected");
  }
});

module.exports = connection

