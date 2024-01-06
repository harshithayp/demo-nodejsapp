const express = require("express");
const serverless = require("serverless-http");
const app=express();
const router =express.Router();
router.get("/", function(req,res){
    res.send("Welcome to nodejs demo app");
});

app.use('/.netlify/functions/api',router);

module.exports.handler=serverless(app);