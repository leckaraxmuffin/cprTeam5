const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;
let anz = 0;
let daten;

app.listen(port, () => {
    console.log("server läuft unter http://localhost:" + port);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    anz++;
    console.log(anz);
    res.send(' Hi ');
});

app.get('/info', (req, res) => {
    //let anzMenschen = parseInt(daten)
    fs.readFile('../py/readme.txt', (error, data) => {
        daten = JSON.stringify(data); 
        console.log(daten);
        //Daten auslesen muss noch in Public rein - JSON.parse(document.all[2].innerHTML).data
    });
    res.send(daten);
})
