const express = require('express');
const fs = require('fs');
const app = express();

app.get("/books", (req, res)=>{
   fs.readFile(process.argv[3], 'utf8',(err, data)=>{
       if(err){
           throw err;
       }
       var dataObj = JSON.parse(data);
       res.json(dataObj);
   }); 
});

app.listen(process.argv[2]);