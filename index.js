const CARDS = require('./tarot.json');

function pickTarot(cards) {
    let orientation;

    // pick orientation
    if(Math.round(Math.random()) > 0) {
        orientation = "upright";
    } else {
        orientation = "reversed";
    }

    // pick card
    console.log(cards);

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