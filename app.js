const express = require('express')
const app = express()
//const path =require('path')
const bodyparser = require('body-parser')


// Load View Engine
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({extended: true}));  //& ?

// Route
app.get('/', function (req, res) {
    //return res.render('index', function(req,res){ //par1:'Turgut' });
    return res.render('index', {
      par1:"Turgut",
      par2:"Fener1113"
    });
})

app.get('/add-node', function (req, res) {
    //return res.render('index', function(req,res){ //par1:'Turgut' });
    return res.render('add-node', {
      par1:"Ekle",
      par2:"Node12"
    });
})



//Start Server
app.listen(3000, function(){
  console.log('Server running Port 3000');
})
