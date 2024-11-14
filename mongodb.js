const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/LoginCred")
.then(()=>{
  console.log('mongodb connected')
})
.catch(()=>{
  console.log('fail to connect')
})

const LogInSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const SigUpSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  duration: {
    type: Number, 
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

// Export the model
const collection1=new mongoose.model('collection1',LogInSchema)
const collection2=new mongoose.model('collection2',SigUpSchema)
const Courses =new mongoose.model('Courses', courseSchema);
module.exports = { collection1, collection2, Courses };