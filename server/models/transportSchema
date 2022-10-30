const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')


// const Schema=mongoose.Schema

const transportSchema=new mongoose.Schema({
  
    bookingOption:{
        type:String,
        required :true
    },
    Destination:{
        type:String,
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
  
    
},{timestamps:true})

const Transport = mongoose.model('TRANSPORT', transportSchema);

module.exports = Transport;
