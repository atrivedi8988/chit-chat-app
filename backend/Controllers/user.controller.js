const generateToken = require("../config/generateToken");
const User = require("../Models/user.model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password, pic });
  //   user.save();
  const token = generateToken(user._id);
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    pic: user.pic,
    token,
  });
});

exports.loggedIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  let comparePassword = await user.matchPassword(password);
  const token = generateToken();

  if (user && comparePassword) {
    res.json({
      success: true,
      user: await User.findOne({ email }),
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

exports.allUsers = asyncHandler(async(req,res)=>{
  const keyword = req.query.search ? {
    $or : [
      {name : { $regex : req.query.search, $option : "i"}},
      {email : { $regex : req.query.search , $option : "i"}}
    ]
  } : {};

  const users = await User.find(keyword).find({_id : { $ne : req.user._id}})
  res.status(200).send(users)
})
