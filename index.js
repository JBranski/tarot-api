const CARDS = require('./tarot.json');

function pickTarot(cards) {
    let orientation;
    let cardNum;
    let card;
    let desc;
    let str;

    // pick orientation
    if(Math.round(Math.random()) > 0) {
        orientation = "upright";
    } else {
        orientation = "reversed";
    }

    // pick card
    cardNum = Math.round(Math.random() * cards[tarot].length - 1);
    card = cards[tarot][cardNum].title;
    desc = cards[tarot][cardNum].desc;

    str = `Fates have drawn you to the ${card}! ${desc}.`

    return str;

}

// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
    res.send(
        pickTarot(CARDS)
    );
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});

module.exports = app;