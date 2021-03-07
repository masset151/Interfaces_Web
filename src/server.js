const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/app/app.component.html'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app/app.component.html'));
});

