//note 1: remember to save with encoding utf8 else shit will not work :>>>

const express = require("express");
const cors = require("cors");
const pool  = require("./db");
const app = express();

//const port = 5000; //we'll follow strictly along the tutorial to avoid fuckups

//middleware. Though i don't exactly understand the term just yet.
app.use(cors());
app.use(express.json());

app.post("/newuser", async (req, res) => {
    try {
        const { placeholder } = req.body;
        const newuser = await pool.query("DBMAN INSERT INFO", [placeholder]);
        res.json(newuser.rows[0]);
    }
    catch (err)  { 
        console.error(err.mesage);
    }
    }
)

app.get("/user", async (req, res) => { 
    try {
        const someuser = await pool.query("DBMAN GET SPECIFIED USER")
        res.json(someuser); //this should hold the user info after get query (?)
    }
    catch (err) { 
        console.error(err.message);
    }
    }
)

app.listen(5000, () => {
    console.log("running on port 5000"); //declared port up there literally for this :>
}
);



