const sql = require("../../../config/dbConnection")
const CryptoJS = require('crypto-js')

exports.AddMerchants = (req,result)=>{
    sql.query('SELECT * FROM tbl_users WHERE email = "'+req.body.email+'"', (err,res)=>{
        if(err){
            console.log('error')
            result(err,null)
            return;
        }
        if(res.length > 0){
            const arr = {
                success: 'false',
                message: 'Email already exist'

            }
            result(err,arr)
            return;
        }

        else{
            var encryptPassowrd = CryptoJS.MD5(req.body.password)
            sql.query(`INSERT INTO tbl_users(registartion_number,company_name,address,email,country,password,name,phone_number,user_type,parentID)
            VALUES('${req.body.registartion_number}', '${req.body.company_name}', '${req.body.address}','${req.body.email}','${req.body.country}', '${encryptPassowrd}','${req.body.name}','${req.body.phone_number}','${req.body.user_type}','${req.body.user_id}');`,(error,resp)=>{
                if(error){
                    result(err,null)
                    return;
                }
                {
                    // result(null,resp)
                    // return;
                }
            })
        }
        result(null,res)
        return;
    })
}