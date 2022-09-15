const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


const Schema=mongoose.Schema

const PaymentWorkoutSchema=new Schema({
    cardNumber:{
        type:Number,
        required :true
    },
    expirydate:{
        type:String,
        required:true

    },
    cvvNumber:{
        type:Number,
        required:true
    },
    cardHolderName:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)
