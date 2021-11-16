const router = require('express').Router();
const data = require('../../data/db.json');
const { addNote, deleteNote } = require('../../lib/data.js');

router.get('/notes', (req, res) => {
    res.send(data);
});
router.get('/', (req, res) => {
    res.send('API HERE!');
});
router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = router;