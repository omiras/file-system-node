const fs = require('fs');

/** Leer README */

async function taxNotifications(dni) {
    // leer el fichero "en crudo" (un string sin formato)
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    // utilizamos el método JSON.parse, para transformar el string en un tipo de dato que podamos manejar mejor (que puedas recorrerlo, hacer búsquedas estructuradas, etc) con JavaScript
    const arrayOfPersons = JSON.parse(fileContent);
    const person = getPersonFromArray(arrayOfPersons, dni);
    console.log("🚀 ~ file: app.js:13 ~ taxNotifications ~ person:", person)


    if (person && person.notificacionesPendientes) {
        // escribir el mensaje indicado de la iteración 3.
        const message = `El/La contribuyente ${person.nombre} se enviará un email a ${person.email}\n`;
        await fs.promises.appendFile("notificaciones.txt", message);
    }
}

/**
 * 
 * @param {array} arr Array de personas 
 * @param {string} dni Dni a buscar 
 * @returns Devuelve la persona a la que pertenece el dni si esta se encuentra en el array. En cualquier otro caso devuelve undefined
 */
function getPersonFromArray(arr, dni) {
    let personFound = undefined;
    let i = 0;

    while (!personFound && i < arr.length) {
        // Esto se convertirá en true cuando encontremos a la persona en el array
        if (arr[i].dni == dni) {
            personFound = arr[i];
        } else {
            i++;
        }
    }

    return personFound;
}

taxNotifications("98765432C");
