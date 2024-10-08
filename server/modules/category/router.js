const express = require("express");
const controller = require('./controller');
const router = express.Router();

router.get("", controller.getAll);
router.get("/:id", controller.getById);
router.post("", controller.create);
router.delete("/:id", controller.remove);
router.put("/:id", controller.edit);




module.exports = router;