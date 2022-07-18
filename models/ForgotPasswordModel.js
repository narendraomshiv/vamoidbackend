const sql = require("../../vemo-id-backend/config/dbConnection")
const nodemailer = require('nodemailer')

exports.ForgetPassword = (request,result)=>{


    function sendEmail(email) {
 
        var email = req.body.email;
     
        var mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mobappssolutions153@gmail.com',
                password: 'Mobapps@123' 
            }
        });
     
        var mailOptions = {
            from: 'mobappssolution153@gmail.com',
            to: email,
            subject: 'Reset Password Link - pankajmobappssolutions.com',
            html: '<p>You requested for reset password, kindly use this <a href="http://localhost:5000/resetpassword">link</a> to reset your password</p>'
     
        };
     
        mail.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(1)
            } else {
                console.log(0)
            }
        });
    }




    sql.query('SELECT * FROM tbl_users WHERE email ="'+request.body.email+'"',function(err, resp) {
        if (err) {
            console.log('testing')
            result(err,null)
            return;
        }

        console.log(resp)
        result(null,resp);
        return;
    
    });
}