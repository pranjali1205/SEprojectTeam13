const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


const Schema=mongoose.Schema

const LoginWorkoutSchema=new Schema({
    username:{
        type:String,
        required :true
    },
    password:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model('loginWorkout',workoutSchema)
