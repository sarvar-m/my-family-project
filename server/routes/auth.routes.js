const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/auth.controllers");

router.get("/signup", signup);

module.exports = router;
