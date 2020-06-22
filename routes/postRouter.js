const router = require("express").Router();
const verify = require("../modules/verifyToken");
const Users = require("../model/Users");

router.get("/", verify, async (req, res) => {
  //find user in DataBase
  user = await Users.findById(req.user);
  user_name = user.name;

  //send Custom user Page to Client
  res.render("dashboard", { message: `Welcome ${user_name}` });
});

module.exports = router;
