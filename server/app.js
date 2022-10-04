const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
 
dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE;

// mongoose.connect(DB,{
//     useNewUrlParser :true,
//     useCreateIndex: true,
//     useUnifiedTopology :true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log('connection sucessful');
// }).catch((err) => console.log('no connection'));

require('./db/conn');
const User = require('./model/userSchema');
const Transport = require('./model/transportSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;


// Middelware 
// const middleware = (req,res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }

// app.get('/', (req, res) => {
//     res.send(`Hello world from the server app.js`);
// });

// app.get('/about', (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.get('/transport', (req, res) => {
    res.send(`transport working`);
});
app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


