const router = require('express').Router();
const data = require('../../data/db.json');
const addNote = require('../../lib/data.js');

router.get('/notes', (req, res) => {
    res.send(data);
});
router.get('/', (req, res) => {
    res.send('API HERE!');
});
router.post('/notes', (req, res) => {
    addNote(req.body).then(() => {
        res.status(200);
        res.json(note);
    });
});
router.delete('/notes', (req, res) => {
    console.log(req.body)
});

module.exports = router;