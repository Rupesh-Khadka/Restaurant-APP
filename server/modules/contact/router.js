const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("", controller.create);
router.get("", controller.getAll);
router.delete("/:id", controller.remove);

module.exports = router;