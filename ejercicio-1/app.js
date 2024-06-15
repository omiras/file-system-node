const fs = require('fs');
const path = require('path');
let dni = "";

/** Leer README */

fs.readFile("./hacienda.json", "utf-8", (err, data) =>{
    const parsedData = JSON.parse(data);
    const namesArr = parsedData.forEach(person => {
        console.log(person.nombre)
    });
})