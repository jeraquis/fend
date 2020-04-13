
const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require('aylien_textapi')

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

let data ={}

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

/*
app.post('/api', async (req, res) => {
    console.log(process.env.API_ID)
    console.log(process.env.API_KEY)
    console.log(req.body)
    try {
        textapi.hashtags({
            url: req
        }, function(error, response) {
            console.log("error is - " + error)
            if (error === null) {
                console.log('worked')
                res.send(response)
            }
        })
    } 
    catch(error) {
        console.log('error', error)
    }
})        
*/

app.get('/api', function(req, res) {
    console.log(process.env.API_ID)
    console.log(process.env.API_KEY)
    console.log(req.body)
    console.log(data)

    textapi.hashtags({
        url: data
    }, function(error, response) {
        console.log("error is - " + error)
        if (error === null) {
            console.log('worked')
            res.send(response)
        }
    })
})

app.post('/tags', function(req,res) {
    console.log(req)
    data = req
    console.log(data)
    res.send('posted')
})

/*
textapi.hashtags({
    url: 'http://www.bbc.com/sport/0/football/25912393'
    }, function(error, response) {
        if (error === null) {
          console.log(response.hashtags);
        }
});
*/
