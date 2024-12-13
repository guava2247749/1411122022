//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/AgencyProject"));

var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");


