const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
app.use(express.static('public'))

const videosController = require('./controllers/videos.js');
app.use('/videocontent', videosController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
