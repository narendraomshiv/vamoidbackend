const sql = require('../../../vemo-id-backend/config/dbConnection')
const CryptoJS = require('crypto-js');


exports.ManageUpdateAdmin = (req,result)=>{
    var encryptPassowrd = CryptoJS.MD5(req.body.password);
    sql.query('UPDATE tbl_users SET registartion_number = "'+req.body.registartion_number+'", company_name = "'+req.body.company_name+'", address = "'+req.body.address+'", country = "'+req.body.country+'", phone_number= "'+req.body.phone_number+'", email="'+req.body.email+'", password = "'+encryptPassowrd+'", name="'+req.body.name+'" WHERE id = "'+req.body.id+'"', (err,res)=>{

        if(err){
            console.log('errror')
            result(err,null)
            return;
        }

        {
            result(null, res)
            return;
        }

    })
}