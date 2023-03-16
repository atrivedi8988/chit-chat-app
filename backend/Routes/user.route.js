const express = require("express");
const { registerUser, loggedIn ,allUsers } = require("../Controllers/user.controller");

const router = express.Router();

router.route("/").post(registerUser).get(allUsers)
router.post("/login",loggedIn);

module.exports = router