import fs from 'node:fs';

fs.appendFile('./textToBeAdded.txt', '--> This must be added every time someone runs this code. \n', (err)=> {
    if(err) {
        console.log('An error is occurred while adding some extra information: ' + err);
    }
    console.log('Your data is added!');
})