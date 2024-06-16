const fs = require('fs');

fs.readFile("./files/2abril_participants_94849208356.csv", "utf-8", (err, data) => {
    //console.log(data)

    const parsedData = data.split('\r\n');
    console.log(parsedData);

    const participants = parsedData.map(participant => {
        const newParticipantArr = participant.split(',');
        const result = `${newParticipantArr[0]} ha venido a clase durante ${newParticipantArr[2]} minutos.`
        return result;
    })
    const participantsString = participants.join('\n');
    fs.writeFile("./files/informe.txt", participantsString, (err) => {
        if (err) {
            console.log('Error during creating new file: ', err)
        }
        else {
            console.log('Done ')
        }
    })

})