const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , '/public')));
//isme apna poora path ka naam dalna hai 
// you can use index.js

app.set('view engine' , 'ejs');

app.get("/" , function(req , res){
    res.render("index");  
});

app.get("/login" , function(){
    res.send("hello there , this is my first website");

});
app.get('/profile/:username' , function(req , res){
    
    res.send( `welcome, ${req.params.username}`);
});
//now after colon lagane ke baad you can add anything you want like shivam and for all the other things you want to add for
app.get('/profile/:username/:age' , function(req , res){
    res.send(req.params);
    //this will direct return the object parameters of the url

})
app.get('/profile/:username/:age/:gender' , function(req ,res){
    res.send(`welcomd, ${req.params.username} , how are you ?`)
})
app.listen(3000 , function(){
    console.log('its running');

});
