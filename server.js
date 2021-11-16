const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// Parse incoming JSON data
app.use(express.json());
// Make public folder static so its files can be used
app.use(express.static('public'));
// Route for API calls
app.use('/api', apiRoute);
// Route for HTML calls
app.use('/', htmlRoute);
// Setting the port the server will bind to
app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});