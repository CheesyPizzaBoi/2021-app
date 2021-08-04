const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

const accountSid; 
const authToken;
const client;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


app.post('/sms', (req, res) => {
    client.messages 
      .create({ 
         body: req.body.message,        
         to: `+1${req.body.number}`,
       }) 
      .then(message => console.log("Message Sent!")) 
      .done();
});
 


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});