const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


const Schema=mongoose.Schema

const bikeBookingWorkoutSchema=new Schema({
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
    time:{
        type:String,
        required :true
    },
    mobileNumber:{
        type:Number,
        required :true
    },
    date:{
        type:String,
        required :true
    },
    reps:{
        type:Number,
        required : true
    },
    load:{
        type:Number,
        required : true
    }
},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)
