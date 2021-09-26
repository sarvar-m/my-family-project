const express = require("express");
const router = express.Router();

// import controller
const {
  signup,
  accountActivation,
} = require("../controllers/auth.controllers");

// import validators
const { userSignupValidator } = require("../validators/auth.validator");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account-activation", accountActivation);

module.exports = router;
