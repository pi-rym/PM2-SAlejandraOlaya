const { Router } = require("express");
const { testController } = require("../controllers/indexControlllers");

const router = Router();

router.get("/movies", testController)

module.exports = router;