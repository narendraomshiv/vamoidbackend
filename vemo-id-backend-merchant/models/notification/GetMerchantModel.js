const sql = require("../../../config/dbConnection")
exports.GetMerchantNotificaton = (request,result)=>{
    sql.query('SELECT * FROM tbl_notifications WHERE user_type= 2', (err,res )=>{
        if(err){
            console.log("err")
            result(err, null)
            return
        }
        {
            result(null, res)
            return
        }
    })
}