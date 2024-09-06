import fs from 'node:fs';

fs.writeFile('./my_first_write.txt', 'Elena Semenova', function(err) {
    if(err) {
        console.log('An error is occurred: ' + err);
    }
    console.log('Your name is written!');
})