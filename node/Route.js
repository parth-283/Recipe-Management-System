var express = require("express");
var router = express.Router();
var userctrl = require("./controllers/UserRegister");
var feedbackctrl = require("./controllers/UserFeedBack")
var recipectrl = require("./controllers/AddRecipe")
var likectrl = require("./controllers/like")
var bodyparser = require("body-parser");

//Add Image
// var multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("req",req);
//     console.log("file",file);
//     cb(null, "pic");
//   },
//   filename: function (req, file, cb) {
//     // console.log("reqqqqqqqq",req.body);
//     console.log("file",file);
//     let newname = Date.now()+'-'+file.originalname;
//     cb(null,newname);
//   },
// });
// var upload = multer({storage:storage });


// parse request of content type:-application/x-www-from-urlencoded
var urlencoderparser = bodyparser.urlencoded({ extended: true });

// parse request of content-Type .application.json
router.use(bodyparser.json());

// router.get("/", (req, res) => {
//   res.send("Home Page is called");AddBox
// });

//register route
router.post("/add", urlencoderparser, userctrl.adduser);
router.get("/list", userctrl.userlist);
router.get("/info/:id", userctrl.userinfo);
router.put("/update/:id", urlencoderparser, userctrl.userupdate);
router.delete("/delete/:id", userctrl.userDelete);

//feedback route
router.get("/feedback/list",feedbackctrl.feedbacklist);
router.post("/feedback/add", urlencoderparser, feedbackctrl.addfeedback);
router.get("/feedback/:id", feedbackctrl.feedbackinfo);
router.put("/feedback/update/:id", urlencoderparser,feedbackctrl.feedbackupdate);
router.delete("/feedback/delete/:id", feedbackctrl.feedbackDelete);

//like route
router.get("/like/list",likectrl.likelist);
router.post("/like/add", urlencoderparser, likectrl.addlike);
router.get("/like/:id", likectrl.likeinfo);
router.put("/like/update/:id", urlencoderparser,likectrl.likeupdate);
router.delete("/like/delete/:id", likectrl.likeDelete);


//Addrecipe route
router.get("/recipe/list",recipectrl.recipelist);
router.post("/recipe/add", urlencoderparser, recipectrl.addrecipe);
router.get("/recipe/:id", recipectrl.recipeinfo);
router.put("/recipe/update/:id", urlencoderparser,recipectrl.recipeupdate);
router.delete("/recipe/delete/:id", recipectrl.recipeDelete);
// add image route
// router.post('/profile',upload.array('profile_pic'),userctrl.userprofile)
router.post("/recipe/image", recipectrl.userprofile);
// function imageurl  (req, res) {
//   res.json({
//     success:1,
//     profile_url:`http://localhost:4500/recipe/image/${req.file.filename}`
// })
//   console.log("fileDetailes",req.file);
//     res.json({message:'uploaded'});
// }

module.exports = router;
