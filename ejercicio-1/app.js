const fs = require('fs');
const path = require('path');
let dni = "";

/** Leer README */

fs.readFile("./hacienda.json", "utf-8", (err, data) =>{
    console.log(data)
})