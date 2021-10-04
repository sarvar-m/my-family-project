const User = require("../models/user.model");

exports.read = (req, res) => {
  const userId = req.params.id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user.password = undefined;
    res.json(user);
  });
};

exports.update = (req, res) => {
  const { name, surname, password } = req.body;

  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found.",
      });
    }
    if (!name) {
      return res.status(400).json({
        error: "Name is required.",
      });
    } else {
      user.name = name;
    }

    if (!surname) {
      return res.status(400).json({
        error: "Surname is required.",
      });
    } else {
      user.surname = surname;
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          error: "Password should be at least 6 characters long.",
        });
      } else {
        user.password = password;
      }
    }

    user.save((err, updatedUser) => {
      if (err) {
        console.log("USER UPDATE ERROR", err);
        return res.status(400).json({
          error: "User update failed.",
        });
      }
      updatedUser.password = undefined;
      res.json(updatedUser);
    });
  });
};
