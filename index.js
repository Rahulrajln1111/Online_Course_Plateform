//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const posts = [];
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function (req,res) {
res.render("index",{});
});

app.get("/about-us",function (req,res) {
    
res.render("about-us",{});
})
app.get("/courses",function (req,res) {
    
res.render("courses",{});
})
app.get("/courses_maths",function (req,res) { 
res.render("courses_maths");
})
app.get("/courses_program",function (req,res) { 
res.render("courses_program");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
