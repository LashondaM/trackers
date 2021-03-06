const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// allows us to have enviornment variables in the .env file
require('dotenv').config();
// start middleware
// create an express app
const app = express();
const port = process.env.port ||  5000
app.use(cors());
app.use(express.json())
// end middleware
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongoDB database connection established successfully')
})
// Start Routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// End Routes
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})