const sql = require("../../../vemo-id-backend/config/dbConnection");

exports.deleteMerchantData = (req,result)=>{
    sql.query('UPDATE tbl_users SET deleteStatus = 1 WHERE id = "'+req.body.id+'"',(err,res)=>{
        if(err){
            console.log('testing')
            result(err,null)
            return;
        }
        {
            result(null, res)
            return;
        }
    })
}