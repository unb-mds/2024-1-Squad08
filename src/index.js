const express = require('express');
const app = express();
const path = require('path');
//const home = require('./crudehtml/index.html')

app.use(express.static('./crudehtml'));

app.get('/', (req, res) => { 
        res.status(200).sendFile(path.resolve(__dirname, './crudehtml/login.html'));
    }
)

app.get('/newuser', (req, res) => { 
        res.status(200).sendFile(path.resolve(__dirname, './crudehtml/cadastro.html'));
    }
)

app.all('*', (req, res) => { 
    res.status(404).sendFile(path.resolve(__dirname,'./crudehtml/error.html'));
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