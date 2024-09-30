const express = require("express");
const controller = require("./controller");
const router = express.Router();
const { verifyUser } = require("../auth/auth.Middleware");

router.get("", controller.getAll);
router.get("/user", verifyUser, controller.getAllUser);
router.get("/:id", verifyUser, controller.getById);
router.post("", verifyUser, controller.create);
router.delete("/:id", verifyUser, controller.remove);
router.put("/:id", verifyUser, controller.edit);

module.exports = router;