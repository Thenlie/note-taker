const fs = require('fs');
const notes = require('../data/db.json');
const { nanoid } = require('nanoid');

const addNote = (note) => {
    note.id = nanoid();     // Add unique ID to note
    newArr = (notes) ? newArr = notes : newArr = [];    // Create note array   
    newArr.push(note);     // Add new note to array
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {    // Create a new database file with array
        if (err) throw err;
        console.log('Note has been added!');
    });
    return;
};

const deleteNote = (note) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
            notes.splice(i, 1);
            console.log('Note has been deleted!')
        }
    };
    return;
};

module.exports = { addNote, deleteNote }