const express = require('express');
const router2 = express.Router();
const postgres = require('../postgres.js');

router2.get('/', (req, res) => {
    postgres.query('SELECT * FROM photos ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router2.post('/', (req, res) => {
    // console.log(req.body);
    postgres.query(`INSERT INTO photos (header , description ,photo) VALUES ('${req.body.header}', '${req.body.description}', '${req.body.photo}');`, (err, results) => {
        console.log("results: ",results)
        console.log("error1", err)
        postgres.query('SELECT * FROM photos ORDER BY id ASC;', (err2, results) => {
            // console.log(results);
            // console.log(err2);
            res.json(results.rows);
        });
    })
});

router2.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM photos WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM photos ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router2.put('/:id', (req, res) => {
    console.log("reqing body",req.body)
    postgres.query(`UPDATE photos SET header = '${req.body.header}', description = '${req.body.description}', photo ='${req.body.photo}' WHERE id = ${req.params.id};`, (err, results) => {
        console.log("error1 ",err)
        postgres.query('SELECT * FROM photos ORDER BY id ASC;', (err2, results) => {
            console.log("error2 ",err)
            res.json(results.rows)
        });
    })
});

module.exports = router2;
