const express = require('express')
const app = express()
app.use(express.json())
const Joi = require('joi')
const bodyparser = require('body-parser')
var save_obj = require('./controllers/save.js')
var finedOne = require('./controllers/finedOne.js')

//const path =require('path')
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({extended: true}));  //& ?

// Route
app.get('/', function (req, res) {
  //console.log(process.env);
  //console.log('The value of PORT is:', process.env.PORT);

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

app.post('/api/submit_post_addMynots', (req,res) => {

  const { error } = validateMynots(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  save_obj.save_mynots(req.body.first_name, req.body.last_name);
  return res.render('submit-get-kitten', {
    par1:"Post Insert",
    par2:"Mongodb",
    par3: req.body.first_name,
    par4: req.body.last_name
  });
   
 });
 

const myarray =[
  {id:1, name:'Car1'},
  {id:2, name:'Car2'},
  {id:3, name:'Car3'},
];

app.post('/api/somepost', (req,res) => {

 //const result = validateMyarray(req.body);
 //if(result.error) return res.status(400).send(result.error.details[0].message);
 const { error } = validateMyarray(req.body); // object distraction method
 if(error) return res.status(400).send(error.details[0].message);
  
	let item = {
  	id: myarray.length + 1,
  	name: req.body.name
	};
	myarray.push(item);
  res.send(item);
});

app.put('/api/somepost/:id', (req,res) => {
  const myarray1 = myarray.find(c => c.id === parseInt(req.params.id)); 
  if (!myarray1) return res.status(404).send('Id not fined');

  const result = validateMyarray(req.body);
  if(result.error) return res.status(400).send(result.error.details[0].message);

  myarray.name = req.body.name;
  res.send(myarray1);
});

app.delete('/api/somepost/:id', (req,res) => {
  const myarray1 = myarray.find(c => c.id === parseInt(req.params.id)); 
  if (!myarray1) return res.status(404).send('Id not fined');

  const index = myarray.indexOf(myarray1);
  myarray.splice(index,1);
  res.send(myarray);
});

function validateMyarray(myarr){
  const schema = {
    id:  Joi.number().integer().min(0).max(2000000),
    name : Joi.string().min(3).required()
  };
  return Joi.validate(myarr, schema); 

}
function validateMynots(myarr){
  const schema = {
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required()
  };
  return Joi.validate(myarr, schema); 

}
//Start Server at Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

/*
//Start Server
app.listen(3000, function(){
  console.log('Server running Port 3000');
})
*/
/*
	if(!req.body.name || req.body.name.length <3){
    	res.status(400).send('Name is requied and min 3 char');   // 400 Bad Request
    	return;
	}
  */
