const express = require('express');
const axios = require('axios');
const cors = require('cors');
const url = require('url');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send('Welcome')
});

app.all("/bypass", (req, res) => {
    try {
        axios({
            method: req.method,
            url: req.query.url
        })
        .then((response) => {
            res.send(response.data);
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.listen(3030);
