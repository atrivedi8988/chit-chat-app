const User = require("../Models/user.model")


exports.registerUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return thrownErrorMessage(
        res,
        400,
        "User is already exist with this email id"
      );
    } else {
      const { name, email, password, pic } = req.body;
      if (strongPassword(password)===true) {
        if (password === confirmPassword) {
          user = await User.create({ name, email, password, confirmPassword });
          user.save();
          res.status(201).json({
            success: true,
            user,
          });
        } else {
          return thrownErrorMessage(
            res,
            400,
            "Password and Confirm Password does not match"
          );
        }
      } else {
        return thrownErrorMessage(res, 400, strongPassword(password));
      }
    }
  };