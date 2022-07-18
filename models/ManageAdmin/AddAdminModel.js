const sql = require("../../../vemo-id-backend/config/dbConnection");
const multer = require('multer');
const CryptoJS = require('crypto-js');

exports.Admins=(request,result)=>{
  

  sql.query('SELECT * FROM tbl_users WHERE email="'+request.body.email+'"',(err,res)=>{
    if (err){
      console.log("testing")
      result(err, null);
      return;

    }
    if(res.length > 0){
      console.log('Email Already exist')
      // const arr = {
      //   success:false,
      //   message:"Email Already exists"
      // }
      result(err,null)
      return;
    }
    else{
      var encryptPassowrd = CryptoJS.MD5(request.body.Password);
     

      sql.query(`INSERT INTO tbl_users  (registartion_number,country, email, company_name , address, Phone_number, Password,user_type,parentID,name)
      VALUES ('${request.body.registartion_number}','${request.body.country}','${request.body.email}','${request.body.company_name}','${request.body.address}','${request.body.phone_number}','${encryptPassowrd}','${request.body.user_type}','${request.body.user_id}', '${request.body.name}');`,(error,nextres)=>{
        if (error) {
          console.log("testing")
          result(error, null);
          return;
        }
          // result(null,nextres);
          // return;
      });

      result(null,res)
      return;



    }







   


    result(null,res)
    return;
  })

    


  }
