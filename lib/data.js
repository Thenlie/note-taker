const fs = require('fs');
const notes = require('../data/db.json');

addNote = (note) => {
    newArr = (notes) ? newArr = notes : newArr = [];    // Create note array   
    newArr.push(note);     // Add new note to array
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {    // Create a new database file with array
        if (err) throw err;
        console.log('Note has been added!');
    });
};

module.exports = addNote