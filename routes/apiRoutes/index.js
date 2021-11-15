const router = require('express').Router();
const data = require('../../data/db.json');

router.get('/notes', (req, res) => {
    res.send(data);
});

router.get('/', (req, res) => {
    res.send('API HERE!');
});

router.post('', (req, res) => {
    console.log('Posted!');
});

module.exports = router;