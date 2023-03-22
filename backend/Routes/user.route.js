const express = require("express");
const { registerUser, loggedIn ,allUsers } = require("../Controllers/user.controller");
const { isAuthenticate } = require("../Middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(isAuthenticate, allUsers)
router.post("/login",loggedIn);

module.exports = router