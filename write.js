import fs from 'node:fs';
//it records information given as the second argument and it replaces existing information in the chosen file
fs.writeFile('./my_first_write.txt', 'Andrei Voronin', function(err) {
    if(err) {
        console.log('An error is occurred: ' + err);
    }
    console.log('Your name is written!');
})