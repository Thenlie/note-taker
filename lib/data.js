const fs = require('fs');
const notes = require('../data/db.json');

addNote = (note) => {
    // Create note array
    newArr = (notes) ? newArr = notes : newArr = [];        
    newArr.push(note);
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note has been added!');
    });
};

module.exports = addNote