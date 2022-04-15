const fs= require("fs");
const path = require('path');
const express = require('express')
const app = express();
const port = 8080;

const folderPath = './assignment/';

  
  let d = new Date();
  let filename = "assignment/" + d.getFullYear() + "-"+ d.getMonth() + "-" + d.getDate() + "-"
  + d.getTime() +'.txt'
  const testFolder = 'assignment/';
fs.writeFile(filename,d.toString(),(err)=>{
    console.log("completed writing")
    
})
fs.readdirSync(folderPath).forEach(file => {
    console.log(file);
  });
  app.get('/', function(req, res) {
    
    res.sendFile( path.resolve(filename) );
    //res.sendFile(path.resolve(__dirname,'./assignment'));
 });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })