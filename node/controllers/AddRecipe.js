const recipe = require("../Models/AddRecipe");
var multer = require("multer");

var addrecipe = (req, res) => {
  let data = new recipe(req.query);
  console.log("req.body", req.body);
  console.log("req.query", req.query);
  recipe.create(data, function (error, result, field) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var recipelist = (req, res) => {
  recipe.findall(function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var recipeinfo = (req, res) => {
  recipe.findByID(req.params.id, function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var recipeupdate = (req, res) => {
  let data = new recipe(req.query);
  // console.log("data", req.data);
  // console.log("query",req.query);
  recipe.update(data, req.params.id, function (error, result, field) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var recipeDelete = (req, res) => {
  recipe.delete(req.params.id, function (error, result) {
    if (error) {
      res.send(error);
    }
    res.json(result);
  });
};

var userprofile = (req, res) => {
  faviconUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    // console.log("req.file", req.file);
    // console.log("url",`http://localhost:4500/profile/${req.file.filename}`);
    return res
      .status(200)
      .send(req.file);

    // Everything went fine.
  });
};

// storefront favicon
const faviconStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "pic");
  },
  filename: function (req, file, cb) {
    let newname ="Recipe-" + file.originalname;
    cb(null, newname);
    // "favicon" + '-' + req.params.organizationName + '.png'
  },
  addrecipe,
});

// var imageurl = (req, res) => {
//   res.json({
//     success:1,
//     profile_url:`http://localhost:4500/recipe/image/${req.file.filename}`
// })
//   console.log("fileDetailes",req.file);
//     res.json({message:'uploaded'});
// };

const faviconUpload = multer({ storage: faviconStorage }).single("profile");

// storefront favicon

module.exports = {
  addrecipe,
  recipelist,
  recipeinfo,
  recipeupdate,
  recipeDelete,
  userprofile,
};
