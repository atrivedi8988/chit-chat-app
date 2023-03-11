const express = require("express");
const { registerUser, loggedIn } = require("../Controllers/user.controller");

const router = express.Router();

router.route("/").post(registerUser)
router.post("/login",loggedIn);

module.exports = router