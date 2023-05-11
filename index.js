const CARDS = require('./tarot.json');

function threeTarotSpread(cards) {
    let spread = [];
    let str;

    for (let i = 0; i < 3; i++) {
        let num, card, orientation, desc;

        num = Math.round(Math.random() * cards.tarot.length - 1);
        card = cards.tarot[num].title;

        if(Math.round(Math.random()) == 0) {
            oriNum = 0;
            orientation = "upright";
        } else {
            oriNum = 1;
            orientation = "reversed";
        }

        if(oriNum == 0) {
            desc = cards.tarot[num].orientation[oriNum].upright;
        } else {
            desc = cards.tarot[num].orientation[oriNum].reversed;
        }

        spread.push([card, orientation, desc]);        
    }

    str = `The Fates have answered your call. Your first card is ${spread[0][0]} - ${spread[0][1]} (${spread[0][2]}). Your second card is ${spread[1][0]} - ${spread[1][1]} (${spread[1][2]}). And your final card is ${spread[2][0]} - ${spread[2][1]} (${spread[2][2]})!`

    // console.log(str)
    return str;
}

// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
    try {
        res.send(
            threeTarotSpread(CARDS)
        );
    } catch (error) {
        res.status(500).send("Oops, an error occurred — please try again shortly!");
    }
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});

module.exports = app;