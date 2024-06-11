const fs = require('fs');
const path = require('path');
const jsonFile = path.join(__dirname, 'hacienda.json');
let dni = "76543210D";

const hacienda = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

let found = false;

let i = 0;
while (!found && i < hacienda.length) {
    found = hacienda[i].dni == dni && hacienda[i].notificacionesPendientes;
    if (found) {
        const message = `El/la contribuyente ${hacienda[i].nombre} tiene notificaciones pendientes. Se enviará un mail a ${hacienda[i].email}\n`;
        fs.appendFileSync("notificaciones.txt", message);
    }
    i++;
}

