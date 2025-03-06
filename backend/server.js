const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

// TODO: Verbinde ien Datenbank

const db = new sqlite3.Database('./task.db');
//TODO: Schreibe request/responses

app.use(bodyParser.json());       // Middleware

db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed BOOLEAN DEFAULT 0)');

db.run('INSERT INTO tasks (title) VALUES (?)', "Zähne putzen");

app.get('/', (req, res) => {
    res.send('das ding läuft');
});


// wenn ein neues Item hinzugefügt werden soll, soll Node JS Server diesen Request so behandeln
app.post('/add', (req, res) => {
     db.run('INSERT INTO tasks (title) VALUES (?)', [req.body.title], function(){
     res.json({tag: "Mittwoch", bals_wirds: "Mittag geben"});
   });
});


// Liste mir alle existierende Items
// hier sollten nur alle Items als JSON im Response geschrieben werden
app.get('/liste_abrufen', (req, res) => {
    db.all('SELECT * FROM tasks', function (err, rows){
        res.json(rows);

    })


})



app.listen(3050, "localhost", () => {
    console.log("Server ist gestartet")
})