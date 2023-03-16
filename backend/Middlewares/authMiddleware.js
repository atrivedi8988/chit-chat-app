const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");

exports.isAuthenticate = asyncHandler(async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        token = req.headers.authorization.split(" ")[1]
        const decodeId = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user = await User.findById(decodeId.id).select("-password")
        next();
    } catch (error) {
        res.status(401)
        throw new Error("Not authorize and no token")
    }
  }

  if(!token){
    res.status(401)
        throw new Error("Not authorize and no token") 
  }
});
