import fs from 'node:fs';

fs.readFile('./textToRead.txt', (err, data) => {
    if(err) {
        console.log('An error is occurred: ' + err);
    }
    const readableData = data.toString();
    console.log(readableData);
})