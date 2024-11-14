//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const multer = require('multer')
const posts = [];
const app = express();
const path = require('path');
app.use(express.static("public"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = './public/img';
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage: storage });
const { collection2, collection1, Courses } = require('./mongodb.js')
app.use(bodyParser.urlencoded({extended:true}))
global.name='Log In'
app.set("view engine","ejs");
app.get("/",function (req,res) {
res.render("index",{Log_In:name});
});
app.get("/index",function (req,res) {
res.render("index",{Log_In:name});
});
app.get("/register",function (req,res) {
res.render("register",{Log_In:name});
});
app.get("/course",function (req,res) {
res.render("course",{Log_In:name});
});
app.get("/privacy",function (req,res) {
res.render("privacy",{Log_In:name});
});
app.post('/signup',async (req,res)=>{
   const data={
    name:req.body.pname,
    password:req.body.ppass,
    email:req.body.pemail
}

await collection2.insertMany([data])
res.render('register');
});
app.post('/login',async (req,res)=>{
try{
const check = await collection2.findOne({email:req.body.email});
console.log(req.body.email,check.password)
if(req.body.email==='admin@email'&&check.password===req.body.pass){
    name=check.name
    res.render('admin-add',{Log_In:name})
}
else{
if(check.password===req.body.pass){
name=check.name
res.render("index",{Log_In:check.name})
}
else{
  res.send("Wrong password")
}
}
}
catch{
res.send("Wrong Details")
}
});
app.get("/about-us",function (req,res) {
    
res.render("about-us",{Log_In:name});
})
app.get("/courses",function (req,res) {
    
res.render("courses",{Log_In:name});
})
app.post('/Course-add',upload.single("courseImage"), async (req, res) => {
  try {
    const data2 = {
      title:req.body.title,
      description:req.body.description,
      category:req.body.category,
      difficulty:req.body.difficulty,
      duration:req.body.duration,
      price:req.body.price,
      courseimgName:req.file.filename
    };
    console.log(req.body,req.file)

    await Courses.insertMany([data2])
    res.redirect('/admin-add?success=true');
  } catch (error) {
    console.error('Error adding course:', error);
    res.redirect('/admin-add?success=false');
  }
});

app.get('/search', async (req, res) => {
  try {
    const keyword = req.query.q || '';
    
    // Query to find courses where the title or description matches the keyword (case-insensitive)
    const courses = await Courses.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } }
      ]
    });
    
    // Render the results in the search view
    res.render('search', { courses: courses });
  } catch (error) {
    console.error('Error while searching for courses:', error);
    res.status(500).send('An error occurred while searching for courses.');
  }
});

app.get("/courses_maths",function (req,res) { 
res.render("courses_maths",{Log_In:name});
})
app.get("/courses_program",function (req,res) { 
res.render("courses_program",{Log_In:name});
})

app.get("/admin-add",function (req,res) { 
res.render("admin-add");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
