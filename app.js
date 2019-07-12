const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var save_obj = require('./controllers/save.js')
var finedOne = require('./controllers/finedOne.js')

//const path =require('path')
//app.set('views', path.join(__dirname, 'views'));

// Load View Engine
app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({extended: true}));  //& ?

// Route
app.get('/', function (req, res) {
    return res.render('index', {
      par1:"MongoDB",
      par2:"NodeJS"
    });
})

app.get('/add-node', function (req, res) {
    return res.render('add-node', {
      par1:"New Data",
      par2:"Main page"
    });
})

app.get('/submit-get-kitten', function (req, res) {
    //res.send('id: ' + req.query.firt_name +'-'+req.query.last_name);
    save_obj.save_mynots(req.query.first_name, req.query.last_name);
    return res.render('submit-get-kitten', {
      par1:"Submit Insert",
      par2:"Mongodb",
      par3:req.query.first_name,
      par4:req.query.last_name
    });
})

app.get('/findOne', function (req, res) {
    return res.render('findOne', {
      par1:"Find Data",
      par2:"Main page",
      par3: 0,
      par4: 0
    });
})

app.get('/submit-get-findOne', function (req, res) {
      finedOne.finedOne_cat(req.query.first_name,  req.query.last_name,function(callback){
           return res.render('findOne', {
             par1:"Find Data",
             par2:"Main page",
             par3: callback
           });
        }
      );
})

//Start Server
app.listen(3000, function(){
  console.log('Server running Port 3000');
})
