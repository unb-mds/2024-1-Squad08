//note 1: remember to save with encoding utf8 else shit will not work :>>>

const express = require("express");
const cors = require("cors");
const app = express();
//const port = 5000; //we'll follow strictly along the tutorial to avoid fuckups

//middleware. Though i don't exactly understand the term just yet.
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("running on port 5000"); //declared port up there literally for this :>
}
);



