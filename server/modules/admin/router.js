const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("", controller.create);
router.get("", controller.getAll);
router.get("/id:", controller.getById);
router.put("/id:", controller.updateOne);
router.delete("/id:", controller.deleteOne);

module.exports = router;