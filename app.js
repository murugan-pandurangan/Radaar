const express = require('express');
  
const app = express();
const http = require('http');
const routes = require('./routers');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const myOptions = {
    ip: false,
    showOnConsole: false,
    bodyDetails:true
  }
//require('express-file-logger')(app,myOptions)

app.get('/', function(req, res){
    res.status(200);
    res.send("Welcome to root URL of Server Test");
});


app.post('/webhook', function(req, res){
    let payload = req.body;
    console.log(payload);
   // res.status(200).end();
   res.status(200);
   res.end();

});

app.use('/api', routes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);