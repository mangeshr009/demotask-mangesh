const {
  createUser,
  getAlluser,
  getuserId,
} = require("../controller/userController");
const checkAuth = require("../middleware/check_auth");

const router = require("express").Router();

router.route("/user").post(createUser).get(checkAuth, getAlluser);

router.route("/user/:id").get(getuserId);

module.exports = router;
