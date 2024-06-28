const express = require('express');
const app = express();

app.use(function(req , res , next){
    console.log('middleware1 chala diya');
    //but this willl case the loader to load a lot
    next();
    //the next() will be actually throwing this further

});
//before getting any route , you are going to make this run because this is actually middle ware

app.get("/" , function(req , res){
    res.send("kaise ho bhai log");
});//route
app.get("/login" , function(req, res){
    res.send("yeh toh sach hai ki abhi practice chahiye");
});
app.get('/register', function(req, res){
    // res.send("hello");


    res.send("dekha hazaro dafa aapko");
});
app.get('/sign up' , function(req, res){
    res.send("sign up");
});
//let's understand error handling 
// hi there
app.listen(3000);
// we are going to learn about the request and response handling

//frontend backend and frontend

// we would be learning how to use middleware here

// we can understand the concept of the middlewares
//jab bhi server request accept karta hai waha se route ke beech pahucne tak agar aap use beech mein rokte ho toh woh middle ware hota hai 
  