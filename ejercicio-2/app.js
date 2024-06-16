const fs = require('fs');

fs.readFile("./files/2abril_participants_94849208356.csv", "utf-8", (err, data) => {
    //console.log(data)

    const parsedData = data.split('\r\n');
    console.log(parsedData)
})