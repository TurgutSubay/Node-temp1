var  Kitten = require( './conn.js')

var finedOne_cats = {
  xx : "",
  finedOne_cat: function (req, res){
    Kitten.findOne({first_name:'miyav1'}).exec(function (err, story) {
            try{
              //  console.log('1');
                this.xx = story.first_name;
                return  res.send(this.xx);
            }catch (err){
            //    console.log('2');
                return res.send('kayıt Yok :)');
            }

    });
  }

}
module.exports = finedOne_cats;
