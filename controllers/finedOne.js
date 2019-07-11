var  Kitten = require( './conn.js')

var finedOne_cats = {
  xx : "",
  finedOne_cat: function (first_n, last_n,callback){
     Kitten.findOne({first_name:first_n}, function (err, story) {
       if (err){
         console.log('1');
            return "noResult";
       }
        console.log('2');
        if (story === null){
          return  callback('noResult');
        }
         
        return callback(story);
    });

  }
}
module.exports = finedOne_cats;

/*try{
    this.xx = story.last_name;
    return  this.xx;
}catch (err){
    return err; //'noResult';
}*/
/*  Kitten.findOne({first_name:first_n}).then(function(doc) {
    if(!doc){
          throw new Error('No record found.');
        }else{
          console.log(doc);//else case
          return JSON.stringify(doc);
    }
  });*/
