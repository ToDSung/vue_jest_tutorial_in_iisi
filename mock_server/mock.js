const http = require('http');
const url = require('url');
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');

const client_name = 'TRA' 
const host = '127.0.0.1'
const port = 23456;
const app = express()
app.use(cors())

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/fruit/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.send({
        "status": "success",
        "failed_code": "",
        "data": {
            "fruits": [
                {
                    "name": 'apple',
                    "price": '30'
                },
                {
                    "name": 'banana',
                    "price": '10'
                },
                {
                    "name": 'mango',
                    "price": '50'
                }
            ]
        }
    });

})

app.listen(port, (err) => {
    if (err) {
        return console.log('bad');
    }
});