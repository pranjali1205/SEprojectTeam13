const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const authenticate=require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/userSchema");
const Transport = require('../model/transportSchema');


router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});


router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword} = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).json({error: "PLZ fill the field properly"});
    }
    try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
    return res.status(422).json({ error: "Email already exist" });
    
    }else if(password!= cpassword){
      return res.status(422).json({ error: "Passwords are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword});
      await user.save();
 
       res.status(201).json({ message: "user registered successfuly" });
    }
    

    } catch (err) {
    console.log(err);
    }

});



router.post('/transport', async (req, res) => {

  const { name, email, noofPeople, time, date, mobileNumber,bookingOption} = req.body;
  if (!name || !email || !noofPeople || !time || !date || !mobileNumber || !bookingOption) {
    return res.status(422).json({error: "PLZ fill the field properly"});
  }
  try {
  const userExist = await User.findOne({ date: date });

  if (userExist) {
  return res.status(422).json({ error: "Booking alredy done at this date" });
  
   }
  //else if(password!= cpassword){
  //   return res.status(422).json({ error: "Passwords are not matching" });
  // } 
  else {
    const user = new Transport({ name, email, noofPeople, time, date, mobileNumber,bookingOption});
    await user.save();

     res.status(201).json({ message: "boooked successfuly" });
  }
  

  } catch (err) {
  console.log(err);
  }

});




router.post('/signin',async (req,res)=>{
  // console.log(req.body);
  // res.json({message:"awsome"});
  try{
    let token;
    let isMatch;
    const { email, password } = req.body;
    if (!email || !password) {
     return res.status(400).json({error:"Plz Fill the data properly "});
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if(userLogin){

      isMatch = await bcrypt.compare(password, userLogin.password);
       
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken",token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });


      if(!isMatch){
       res.status(400).json({error:"invalid Credentials"});
       } else{
        res.json({message: "user Singed in sucessfully"});
      }

    }else{
      res.status(400).json({error:"Invalid Credentials"});
    }
 

   
  }catch(err){
    console.log(err);
  }
});
 
// about us ka page
router.get('/about', authenticate, (req,res)=>{
  console.log('hello my about');
  res.send('Hello about world fomr the server');
});
    
module.exports = router;

  //using promises
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword} = req.body;
   
//     if( ! name|| !email|| !phone|| !work|| !password|| !cpassword){
//         return res.status(422).json({error: "Please fill the fields properly "});
//     }

    // console.log(req.body);
    // console.log(email);

    // res.json({ message: req.body });
    // res.send("mera register page");
    
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }

//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save().then(() => {
//            res.status(201).json({messege:"User registered sucessfully"}); 
//         }).catch((error)=> res.status(500).json({error:"Failed to register"}));

//     }).catch(err => {console.log(err);});

// });




//using async await

// router.post('/register', async(req, res) => {

//     const { name, email, phone, work, password, cpassword} = req.body;
   
//     if( ! name|| !email|| !phone|| !work|| !password|| !cpassword){
//         return res.status(422).json({error: "Please fill the fields properly "});
//     }
    
//     try{
     
//         const userExist = await User.findOne({email:email})
        
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});
        
//         // const userRegister = 
//         await user.save();

//         // if(userRegister){
//             res.status(201).json({messege:"User registered sucessfully"});
//         // }else{
//         //     res.status(500).json({error:"Failed to register"}); 
//         // }
        

//     }catch(err){
//         console.log(err);
//     }
    
// });

// router.post('/signin', async (req, res) => {
//      try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//     return res.status(400).json({error:"Plz Fill the data"});
//     }
//     const userLogin = User.findone({ email: email });
//     console.log(userLogin);
//     res.json({messege:"user signin succesfull"});


//     } catch (err) {
//     console.log(err);
//     }
// });
    
    



