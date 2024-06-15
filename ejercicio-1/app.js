const fs = require("fs");
const path = require("path");
let dni = "76543210D";

/** Leer README */

// fs.readFile("./hacienda.json", "utf-8", (err, data) => {
//   const parsedData = JSON.parse(data);
//   const namesArr = parsedData.forEach((person) => {
//     console.log(person.nombre);
//   });
// });

const hacienda = JSON.parse(fs.readFileSync('./hacienda.json', 'utf8'));

let found = false;

let i = 0;
while (!found && i < hacienda.length) {
    found = hacienda[i].dni == dni && hacienda[i].notificacionesPendientes;
    if (found) {
        const message = `El/la contribuyente ${hacienda[i].nombre} tiene notificaciones pendientes. Se enviará un mail a ${hacienda[i].email}\n`;
        // fs.appendFileSync("notificaciones.txt", message);
        console.log(message)
    }
    i++;
}
