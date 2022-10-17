//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));




app.get("/",function (req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
    
});





app.post("/bmicalculator",function (req , res) {
    var weigth = parseFloat(req.body.weigth);
    var heigth = parseFloat(req.body.heigth);
    bmi = weigth / (heigth*heigth);

    res.send("your bmi is"+bmi);
});



app.listen(3000,function () {
    
    console.log("server başlatıldı");
});
