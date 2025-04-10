const express = require("express");
const router = express.Router();
const cardController = require("../Controllers/cardController");

router.get("/cards", cardController.getCards);
router.post("/cards", cardController.createCard);

module.exports = router;
