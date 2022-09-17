const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


const Schema=mongoose.Schema

const BookingFormWorkoutSchema=new Schema({
    yourFullName:{
        type:String,
        required :true
    },
    youremail:{
        type:String,
        required :true
    },
    noofPeople:{
        type:Number,
        required :true
    },
    amount:{
        type:Number,
        required :true
    },
    mobileNumber:{
        type:Number,
        required :true
    }
    
},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)
