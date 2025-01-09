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
    {imageUrl:'images/portfolioCF/GIF_0001.gif',alt:"GIF_0001",heading:"BONK!!",text:"日常被現實打擊"},
    {imageUrl:'images/portfolioCF/GIF_0002.gif',alt:"GIF_0002",heading:"燕東夏生賀圖",text:"誰能想到禮物裡面有變態"},
    {imageUrl:'images/portfolioCF/GIF_0003.gif',alt:"GIF_0003",heading:"芙露爾生賀圖",text:"芙芙超卡哇"},
    {imageUrl:'images/portfolioCF/GIF_0004.gif',alt:"GIF_0004",heading:"薯條控",text:"薯條夢女日常"},
    {imageUrl:'images/portfolioCF/GIF_0006.gif',alt:"GIF_0006",heading:"平行時空的行星熱戀",text:"不小心OOC了哈哈..."},

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