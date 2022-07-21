const fs = require('fs');

function getOrdem()
{
    fs.readFile('data/ordens.txt', (err, data) => {
        if(err) throw err;
        console.log(data);
    })
}

module.exports = getOrdem();