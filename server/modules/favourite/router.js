const express = require("express");
const controller = require("./controller");
const { verifyUser } = require("../auth/auth.Middleware");
const router = express.Router();

router.get("", verifyUser, controller.getAll);
router.post("", verifyUser, controller.create);
router.delete("/:id", verifyUser, controller.remove);

module.exports = router;