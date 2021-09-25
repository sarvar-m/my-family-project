const User = require("../models/user.model");

exports.signup = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "User with this email already exists.",
      });
    }
    let newUser = await User.create({ name, surname, email, password });
    newUser.save();
    res.status(200).json("Signup success! Please sign in.");
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};
