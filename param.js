const express = require('express');
const crypto = require('crypto');

const app = express();

app.put('/message/:id', (req, res)=>{
    var id = req.params.id;
    var hashOut = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
    res.send(hashOut);
});

app.listen(process.argv[2]);
