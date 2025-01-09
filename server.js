var express = require("express");
var server = express();

server.use(express.static(__dirname + "/portfolio"));


var DB = require("nedb-promises");
var profolioIlust = DB.create(__dirname+"/profolioIlust.db");

var DB = require("nedb-promises");
var profolioGif = DB.create(__dirname+"/profolioGif.db");

profolioIlust.insert([
])

profolioGif.insert([
])

server.get("/portfolioIlust-data", (req,res)=>{
    //DB
    profolioIlust.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})

server.get("/portfolioGIF-data", (req,res)=>{
    //DB
    profolioGif.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})



server.listen(80, () => {
    console.log("Server is running at port 80.");
});