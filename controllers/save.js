var save_obj = {
   Kitten     : require( './conn.js'),
   save_mynots: function(req, res,first,last){
                var saver_x=  new this.Kitten({ first_name: first ,last_name:last});
                try{
                      saver_x.save().then((data) => {
                        return   res.send('Kaydedildi :)');
                         });
                }catch{
                      return  res.send('HATA!');
                }
     }
}
module.exports = save_obj;
