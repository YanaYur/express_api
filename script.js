const fs = require('fs');

fs.readFile('./hello.txt', (error, data) => {
    if (error) {
        console.log('errror');
    }
    console.log('1',data.toString('utf8'));
});

const file= fs.readFileSync('./hello.txt');
console.log('2',file.toString());

fs.writeFile('bye.txt','Sad to see you go', error=>{
    if(error){
        console.log(error);
    }
})

// DELETE
fs.unlink('./bye.txt', err=>{
    if(err){
        console.log(err)
    }
    console.log('Inception')
})


