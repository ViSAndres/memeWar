const express = require('express');
const app = express();
const port = 3001;
const bodyparser = require('body-parser');

app.use(bodyparser.json())

app.listen(port)

app.post('/session', function(req,res){
    console.log(req.body);
})

console.log("server running")