

// importing all the dependencies

require ('dotenv').config ();
const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const helmet = require ('helmet');
const xss = require ('xss-clean');
const port = process.env.PORT || 80;
const bodyParser = require ('body-parser');
const path = require ('path');
const { apiRoutes } = require (path.resolve (__dirname, 'routes', 'apiRoutes'));

// making the database Connection

mongoose.Promise = global.Promise;
mongoose.connect (process.env.DATABASE_URL).then (() => {
    console.log (`Connected : ${process.env.DATABASE_URL}`);
}).catch ((error) => {
    console.log (`Error: ${error.message}`);
})


// configuring the app

const app = express ();
app.use (helmet ());
app.use (cors ());
app.use (xss ());
app.use (bodyParser.json ({ limit: '10kb' }));


// making the /api endpoint
app.use ('/api', apiRoutes);

// making the server listen on a particular port
app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})