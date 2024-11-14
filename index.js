//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const posts = [];
const app = express();
const collection2=require('./mongodb.js')

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function (req,res) {
res.render("register",{});
});
app.get("/index",function (req,res) {
res.render("index",{});
});
app.get("/register",function (req,res) {
res.render("register",{});
});
app.post('/signup',async (req,res)=>{
   const data={
    name:req.body.pname,
    password:req.body.ppass,
    email:req.body.pemail
}

await collection2.insertMany([data])
res.render('register')
})
app.post('/login',async (req,res)=>{
try{
const check = await collection2.findOne({email:req.body.email})
if(check.password===req.body.pass){
res.render("index",{Log_In:check.name})
}
else{
  res.send("Wrong password")
}
}
catch{
res.send("Wrong Details")
}
})
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
