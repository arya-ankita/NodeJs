const express = require("express");
const http = require("http");

const app = express();

app.get("/", function(req,res){
    res.send("Welcome to my application");
});

app.get("/about", function(req, res){
    res.send("My about page");
});

app.get("/html", function(req,res){
    res.sendFile(__dirname+"/Index.html");
});

app.get("/cal", function(req, res){
     res.sendFile(__dirname+"/Index.html");
});

app.listen(3000, function(req,res){
    console.log("Server is running on port : 3000");
});

