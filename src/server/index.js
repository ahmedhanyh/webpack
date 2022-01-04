const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const FormData = require('form-data');
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {

    // const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    // formdata.append("txt", "The restaurant was great even though it’s not near Madrid.");
    // formdata.append("lang", "en");
    
    // const requestOptions = {
    //     method: 'POST',
    //     body: formdata,
    //     redirect: 'follow'
    // };

    // const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    //     .then(result => (
    //         result.json()
    //     ))
    //     .then(result => {
    //         console.log(result)
    //         // res.send(result)
    //     })
    //     .catch(error => console.log('error', error));

    res.send(mockAPIResponse)
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
