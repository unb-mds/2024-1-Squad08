const express = require('express');
const app = express();

app.get('/', (req, res) => { 
        res.send("home page");
    }
)

app.listen(5000, () => { 
    console.log("server running on port 5000");
    }
)

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen