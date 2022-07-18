const sql = require('../../config/dbConnection');
exports.Getsettingdata = (request,result)=>{ 
    
    sql.query('SELECT * FROM tbl_users WHERE id = "'+request.body.id+'"', function(err, rows) {
        
 
        if (err) {
            console.log("testing")
            result(err, null);
            return;
          }


          result(null,rows);
          return;
        
    });
    
}