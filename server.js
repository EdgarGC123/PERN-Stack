const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
// app.use(express.static('public'));

const PORT = 8888

const videosController = require('./controllers/videos.js');
app.use('/videocontent', videosController);

const photosController = require('./controllers/photos.js');
app.use('/photocontent', photosController);

postgres.connect();

app.listen(PORT, () => {
    console.log('listening on ', PORT );
})
