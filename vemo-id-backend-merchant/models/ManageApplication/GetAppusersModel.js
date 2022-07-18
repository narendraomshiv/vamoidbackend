const sql = require('../../../config/dbConnection')

exports.getAppuserlist = (request, result)=>{
    sql.query('SELECT * FROM tbl_app_users  WHERE applicationID="'+request.body.id+'"',(err,res)=>{
        if(err){
            console.log('testing')
            result(err,null)
            return;
        }
        {
            console.log(res)
            result(null, res)
            return;
        }

    })
}