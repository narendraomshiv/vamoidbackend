  const sql = require("../../config/dbConnection");
  exports.Users=(request,result)=>{
    sql.query('UPDATE  tbl_users SET name ="'+request.body.name+'", phone_number = "'+request.body.phone+'", address = "'+request.body.address+'", gender = "'+request.body.gender+'", country = "'+request.body.country+'", state = "'+request.body.state+'", city = "'+request.body.city+'", postal = "'+request.body.postal+'" WHERE id = "'+request.body.id+'"',(err,res)=>{
      if (err) {
        console.log("testing")
        result(err, null);
        return;
      }
        result(null,res);
        return;
    });

    
  }
