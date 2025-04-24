const fs = require('fs');
const path = require('path');
const logDIR = "logs";
let dni = "76543210D";

/** Leer README */


const fileContents = fs.readFileSync("hacienda.json", "utf-8");

const parsedData = JSON.parse(fileContents);

// Corregir Iteración 2 a las 21.11

// https://www.w3schools.com/js/js_loop_forof.asp
for (const person of parsedData) {
    console.log(person.nombre);
}

// Iteración 3: 21.35
let personaEncontrada;
let i = 0;

while (!personaEncontrada && i<parsedData.length) {
    if (parsedData[i].dni == dni) {
       personaEncontrada = parsedData[i];
    }
    i++;
}

if (personaEncontrada && personaEncontrada.notificacionesPendientes) {
    const message = `El/La contribuyente ${personaEncontrada.nombre} tiene notificaciones pendientes. Se enviará un correo a ${personaEncontrada.email}\n`; 
    fs.appendFileSync(path.join(__dirname, logDIR, "notificaciones.txt"), message);

}

