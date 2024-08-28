//connection with the database
const pool = require("./databasescripts/db");

const express = require('express');
const app = express();
const path = require('path');
// const home = require('./crudehtml/index.html')

app.use(express.json());
app.use(express.static('./crudehtml'));

app.get('/', (req, res) => { 
    res.status(200).sendFile(path.resolve(__dirname, './crudehtml/login.html'));
});

app.get('/newuser', (req, res) => { 
    res.status(200).sendFile(path.resolve(__dirname, './crudehtml/cadastro.html'));
});

// Get all rooms
app.get('/api/v1/rooms', async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM Quarto");
        console.log(results);
        res.status(200).json({
        status: "success",
        results: results.rows.lenght,
        data: {
            rooms: results.rows,
        }
    });
    }
    catch(err) {
        console.log(err)
    }
    
});

// Get one room
app.get('/api/v1/rooms/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            room: "005"
        }
    });
});

// Create one room
app.post('/api/v1/rooms', async (req, res) => {
    const { nome, cep, complemento, numero, emaildono } = req.body;

    // Validação básica
    if (!nome || !cep || !numero || !emaildono) {
        return res.status(400).json({ message: "Preencha todos os campos obrigatórios" });
    }

    try {
        const [result] = await db.execute(
            `INSERT INTO REPUBLICA (nome, cep, complemento, numero, emaildono) 
             VALUES (?, ?, ?, ?, ?)`,
            [nome, cep, complemento, numero, emaildono]
        );
        
        res.status(201).json({ message: "República criada com sucesso!", idRepublica: result.insertId });
    } catch (err) {
        console.error("Erro ao criar república:", err);
        res.status(500).json({ message: "Erro ao criar república" });
    }
});


// Update one room
app.put("/api/v1/rooms/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            room: "005"
        }
    });
});

// Delete one room
app.delete("api/v1/rooms/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    })
})

// Handle all other routes
//app.all('*', (req, res) => { 
//    res.status(404).sendFile(path.resolve(__dirname, './crudehtml/error.html'));
//});

const port = process.env.PORT || 5000;
app.listen(port, () => { 
    console.log(`Server running on port ${port}`);
});