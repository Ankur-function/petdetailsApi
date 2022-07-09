const express = require("express");
const router = express.Router();

const petsController = require("../Controllers/petsController");


router.post("/createpet",petsController.createpet);
router.get("/getpets",petsController.getpets)








module.exports = router;