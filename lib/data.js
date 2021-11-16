const fs = require('fs');
const notes = require('../data/db.json');

addNote = (note) => {
    // Create note array
    if(!notes) {
        newArr = [] 
    } else { 
        newArr = notes
    }
    newArr.push(note)
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note has been added!');
    });
};

module.exports = addNote