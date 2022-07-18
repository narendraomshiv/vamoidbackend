const sql = require("../../../config/dbConnection")

exports.GetEnduser = (req,result)=>{
    sql.query('SELECT * FROM tbl_users WHERE parentID = "'+req.body.user_id+'" AND user_type = "'+req.body.user_type+'"', (err,res)=>{
        if(err){
            console.log('Testing')
            result(err, null)
            return;
        }
        {
            console.log(res)
            result(null, res)
            return;
        }
    })
}