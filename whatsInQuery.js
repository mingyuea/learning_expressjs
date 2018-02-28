const express = require('express');
const app = express();

app.get('/search', (req, res)=>{
    var queryOut = req.query;
    res.send(queryOut);
});

app.listen(process.argv[2]);