var save_obj = {
   Kitten     : require( './conn.js'),
   save_mynots: function(first, last){
                var saver_x=  new this.Kitten({ first_name: first ,last_name:last});
                try{
                    saver_x.save().then((data) => {
                      return   'saved';
                    });
                }catch{
                      return  'err';
                }
     }
}
module.exports = save_obj;
