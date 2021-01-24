const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('rct/build'));
app.use(bodyParser.json())




const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
