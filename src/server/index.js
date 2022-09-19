const sentimentData = {}

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env)

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 4000;
const server = app.listen(port, listening);
 function listening(){
    console.log(`running on localhost: ${port}`);
  };

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const DataArray = [];

app.get('/all', getData);

function getData (req, res) {
  res.send(DataArray);
  console.log(DataArray);
};


app.post('/add', addData);

function addData(req,res){
  console.log(req.body);
  newEntry = {
    model: req.body.model,
    agreement: req.body.agreement,
    subjectivity: req.body.subjectivity,
    confidence: req.body.confidence,
    irony: req.body.irony
  };
  DataArray.push(newEntry);
  res.send(newEntry)
}
