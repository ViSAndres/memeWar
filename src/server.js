const express = require('express');
const app = express();
const port = 3001;

app.post('session', function(req,res){
    console.log(req.body);
})