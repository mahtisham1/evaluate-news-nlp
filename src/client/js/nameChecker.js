const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// GET route


app.post('/add', addData);

function addData(req,res){
  console.log(req.body);
  newEntry = {
    polarity: req.body.polarity,
    agreement: req.body.agreement,
    subjectivity: req.body.subjectivity,
    confidence: req.body.confidence,
    irony: req.body.irony
  };
  mockAPIResponse.push(newEntry);
  res.send(newEntry)
}

