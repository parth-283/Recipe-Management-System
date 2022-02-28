var express = require("express");
var router = express.Router();
var userctrl = require("./controllers/UserRegister");
var bodyparser = require("body-parser");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/");
  },
  filename: function (req, file, cb) {
    console.log("file",file);
    let newname = Date.now()+'-'+file.originalname;
    cb(null,newname);
  },

});
var upload = multer({storage:storage });

// parse request of content type:-application/x-www-from-urlencoded
var urlencoderparser = bodyparser.urlencoded({ extended: false });

// parse request of content-Type .application.json
router.use(bodyparser.json());

// router.get("/", (req, res) => {
//   res.send("Home Page is called");
// });

router.post("/add", urlencoderparser, userctrl.adduser);
router.get("/list", userctrl.userlist);
router.get("/info/:id", userctrl.userinfo);
router.put("/update/:id", urlencoderparser, userctrl.userupdate);
router.delete("/delete/:id", userctrl.userDelete);
// router.post('/profile',upload.array('profile_pic'),userctrl.userprofile)
router.post("/profile", upload.single("profile_pic"), userctrl.userprofile);

module.exports = router;
