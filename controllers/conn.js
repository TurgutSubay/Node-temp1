var url = "mongodb://localhost:27017/test";
var mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Conn ok");
});
var kittySchema = new mongoose.Schema({
  first_name: String,
  last_name:String
});
var Kitten = mongoose.model('kittens', kittySchema);
module.exports = Kitten;
