const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


const Schema=mongoose.Schema

const SignupWorkoutSchema=new Schema({
    firstName:{
        type:String,
        required :true
    },
    lastName:{
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
    },
    confirmPassword:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)
