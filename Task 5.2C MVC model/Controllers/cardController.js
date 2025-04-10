
const cardModel = require("../Models/cardModel");

const getCards = async (req, res) => {
    try {
        const cards = await cardModel.getAllCards();
        res.json({ statusCode: 200, data: cards, message: "Success" });
    } catch (err) {
        res.status(500).json({ status: 400, message: "Failed to fetch cards" });
    }
};

const createCard = async (req, res) => {
    try {
        const newCard = req.body;
        const result = await cardModel.insertCard(newCard);
        res.status(201).json({
            status: 201,
            message: "Successfully created card",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ status: 400, message: "Failed to add card" });
    }
};

module.exports = {
    getCards,
    createCard,
};
