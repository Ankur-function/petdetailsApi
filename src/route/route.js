const express = require("express");
const router = express.Router();

const petsController = require("../Controllers/petsController");


router.post("/createpet",petsController.createpet);
router.get("/getpets",petsController.getpets)
router.get("/pet/:petId",petsController.getspecificpets)
router.patch("/pet/:petId",petsController.updatepet)
router.delete("/pets/:petId",petsController.deletepet)








module.exports = router;