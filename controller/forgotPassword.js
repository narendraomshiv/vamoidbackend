const forgotpasswordmodel = require("../../vemo-id-backend/models/ForgotPasswordModel");
exports.forgetpassword = (req,res)=>{
    forgotpasswordmodel.ForgetPassword(req,(err, data) => {
        if (err)
         return res.status(500).send({
            success: "false",
            message: err.message || "error",
          });
        else
        return  res.status(200).send({
            success: "true",
            data: data,
          });
        });
    
}