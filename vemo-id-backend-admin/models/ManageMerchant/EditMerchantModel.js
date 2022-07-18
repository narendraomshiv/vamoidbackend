const sql = require("../../../config/dbConnection")
const CryptoJS = require('crypto-js')

exports.EditMerchant = (req, result)=>{
    var encryptPassowrd = CryptoJS.MD5(req.body.password)
    sql.query('UPDATE tbl_users SET email = "'+req.body.email+'", password = "'+encryptPassowrd+'", phone_number = "'+req.body.phone_number+'", name = "'+req.body.name+'", company_name = "'+req.body.company_name+'", address = "'+req.body.address+'", country = "'+req.body.country+'", registartion_number = "'+req.body.registartion_number+'" WHERE id = "'+req.body.id+'"', (err, res)=>{
        if(err){
            console.log("testing")
            result(err, null)
            return;
        }
        {
            result(null, res)
            return;
        }
    })
}