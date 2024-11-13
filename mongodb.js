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

const collection1=new mongoose.model('collection1',LogInSchema)
const collection2=new mongoose.model('collection2',SigUpSchema)
module.exports=collection1
module.exports=collection2
