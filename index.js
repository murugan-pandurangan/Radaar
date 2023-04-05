const express = require('express');
  
const app = express();
const http = require('http');
const routes = require('./routers');

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const myOptions = {
    ip: false,
    showOnConsole: false,
    bodyDetails:true
  }
//require('express-file-logger')(app,myOptions)

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get('/one', function(req, res){
    res.status(200);
    res.send("Welcome to One root URL of Server");
});

app.get('/test', function(req, res){
    res.status(200);
    res.send("Welcome to Test Server");
});

app.get('/', function(req, res){
    res.status(200);
    res.send("Welcome to root URL of Server Test");
});

app.use('/api', routes);


app.post('/webhook', function(req, res){
    let payload = req.body;
    console.log(payload);
   // res.status(200).end();
   res.status(200);
   res.end();

}) 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);