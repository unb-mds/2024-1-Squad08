const express = require('express');
const app = express();
const path = require('path');
//const home = require('./crudehtml/index.html')

app.use(express.static('./crudehtml'));

app.get('/', (req, res) => { 
        res.status(200).sendFile(path.resolve(__dirname, './crudehtml/index.html'));
    }
)

app.all('*', (req, res) => { 
    res.status(404).send("<h1>NOT FOUND!</h1>");
})

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