const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// sendgrid
const sgMail = require("@sendgrid/mail");
const { cloneWith } = require("lodash");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.signup = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "User with this email already exists.",
      });
    }

    const token = await jwt.sign(
      { name, surname, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Account activation link`,
      html: `<h2>Please use the following link to activate your account.</h2><p>${process.env.CLIENT_URL}/auth/activate/${token}</p><hr /><p>This email may contain sensitive information</p><p>${process.env.CLIENT_URL}</p>`,
    };

    await sgMail.send(emailData);

    res.status(200).json({
      message: `Email has been sent to ${email}. Follow the instruction to activate your account. `,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

exports.accountActivation = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACCOUNT_ACTIVATION,
      function (err, decoded) {
        if (err) {
          console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
          return res.status(401).json({
            error: "Expired link. Please Sign Up again!",
          });
        }

        const { name, surname, email, password } = jwt.decode(token);

        const user = new User({ name, surname, email, password });

        user.save((err, user) => {
          if (err) {
            console.log("SAVE USER IN ACCOUNT ACTIVATION ERROR", err);
            return res.status(401).json({
              error: "Error saving user in database. Try sign up again.",
            });
          }
          return res.status(200).json({
            message: "Sign Up success. Please, Sign In.",
          });
        });
      }
    );
  } else {
    return res.status(400).json({
      message: "Something went wrong. Try again.",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "User with this email does not exist. Please sign up.",
      });
    }

    // authenticate
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        error: "Email and password do not match.",
      });
    }

    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const { _id, name, surname, role } = user;

    res.json({
      token,
      user: { _id, name, surname, email, role },
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
