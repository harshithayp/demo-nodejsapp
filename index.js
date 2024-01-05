const express = require("express");
const app=express();

app.get("/", function(req,res){
    res.send("Welcome to nodejs demo app");
});

app.listen(3005,()=>{
    console.log("Running on port 3005");
});