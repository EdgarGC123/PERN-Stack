const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM videos ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    // console.log(req.body);
    postgres.query(`INSERT INTO videos (header , description ,link) VALUES ('${req.body.header}', '${req.body.description}', '${req.body.link}');`, (err, results) => {
        console.log("results: ",results)
        console.log("error1", err)
        postgres.query('SELECT * FROM videos ORDER BY id ASC;', (err2, results) => {
            // console.log(results);
            // console.log(err2);
            res.json(results.rows);
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM videos WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM videos ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    console.log(req.body)
    postgres.query(`UPDATE videos SET header = '${req.body.header}', description = '${req.body.description}', link ='${req.body.link}' WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM videos ORDER BY id ASC;', (err, results) => {
            // console.log("we are now here");
            res.json(results.rows)
        });
    })
});

module.exports = router;
