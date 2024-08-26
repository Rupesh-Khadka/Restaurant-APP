const express = require("express");
const controller = require("./controller");
const adminController = require("./adminController");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.post("/admin/login", adminController.adminLogin);
router.post("/admin/signup", adminController.adminSignup);

module.exports = router;