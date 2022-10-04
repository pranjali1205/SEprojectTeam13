const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


// const Schema=mongoose.Schema

const transportSchema=new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
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
    date:{
        type:String,
        required :true
    },
    mobileNumber:{
        type:Number,
        required :true
    },
    
    bookingOption:{
        type:String,
        required :true
    },
    
},{timestamps:true})

const Transport = mongoose.model('TRANSPORT', transportSchema);

module.exports = Transport;
