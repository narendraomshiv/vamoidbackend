const sql = require("../../../vemo-id-backend/config/dbConnection")
const CryptoJS = require('crypto-js')

exports.EditMerchants = (req, result)=>{
    var encryptPassowrd = CryptoJS.MD5(req.body.password)
    sql.query('UPDATE tbl_users SET registartion_number = "'+req.body.registartion_number+'", name = "'+req.body.name+'", company_name="'+req.body.company_name+'", address= "'+req.body.address+'", country= "'+req.body.country+'", phone_number="'+req.body.phone_number+'", email="'+req.body.email+'", password = "'+encryptPassowrd+'" WHERE id = "'+req.body.id+'"', (err,res)=>{
        if(err){
            console.log('error')
            result(err,null)
            return;
        }
        console.log(res)
        result(null, res)
        return;
    })
}