const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;
let anz = 0;

app.listen(port, () => {
    console.log("server läuft unter http://localhost:" + port);
});

app.get('/', (req, res) => {
    anz++;
    console.log(anz);
    

    fs.readFile('../py/readme.txt', (error, data) => {
        daten = JSON.stringify(data); 
        console.log(daten);
        res.send(daten);
    });
});

app.use(express.static('public'));

