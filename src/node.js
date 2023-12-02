const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./my_database.db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Login endpoint
app.post('/path/to/your/login/api', (req, res) => {
    const { login, senha } = req.body;

    db.get('SELECT * FROM usuarios WHERE login = ? AND senha = ?', [login, senha], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ status: 'error', message: 'Erro ao acessar o banco de dados.' });
        } else if (row) {
            // If user is found, return a success status
            res.json({ status: 'success' });
        } else {
            // If user is not found, return an error status
            res.status(401).json({ status: 'error', message: 'Login ou senha incorretos.' });
        }
    });
});

// Add new user endpoint
app.post('/path/to/your/add/user/api', (req, res) => {
    const { login, nome, email, senha } = req.body;

    // Perform your validation here

    const sql = `INSERT INTO usuarios (login, nome, email, senha) VALUES (?, ?, ?, ?)`;

    db.run(sql, [login, nome, email, senha], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ status: 'error', message: 'Erro ao adicionar usuário.' });
        } else {
            res.json({ status: 'success' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});