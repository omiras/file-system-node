const fs = require('fs');
const path = require('path');
const jsonFile = path.join(__dirname, 'hacienda.json');

const hacienda = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

for (person of hacienda) {
    console.log(person.nombre);
}