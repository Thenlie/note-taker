const express = require('express');
const app = express();
const PORT = 3001;
const apiRoute = require('./routes/apiRoutes/index')

// Make public folder static so its files can be used
app.use(express.static('public'));

// Route for the landing page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for the notes page
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});

app.use('/api', (apiRoute));

// Setting the port the server will bind to
app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});