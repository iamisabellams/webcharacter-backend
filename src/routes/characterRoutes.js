const express = require("express");
const router = express.Router();

const controller = require("../controllers/characterController");
const auth = require("../middleware/auth");

router.get("/", controller.getCharacter);
router.put("/", auth, controller.updateCharacter);

console.log("characterRoutes carregado");

module.exports = router;