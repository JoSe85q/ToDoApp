const express = require('express');


const app = express();

// TODO: Verbinde ien Datenbank
//TODO: Schreibe request/responses



app.get('/', (req, res) => {
    res.send('request received');
});

app.listen(3050, "localhost", () => {
    console.log("bald ist Mittach")
})