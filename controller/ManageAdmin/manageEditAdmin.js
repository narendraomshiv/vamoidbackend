const ManageEditAdminModel = require('../../../vemo-id-backend/models/ManageAdmin/ManageEditAdminModel')

exports.manageEditAdmin = (req, res)=>{
    ManageEditAdminModel.ManageUpdateAdmin(req,(err,data)=>{
        if(err){
            res.status(500).send({
                success: 'false',
                message: err.message || 'error',
            });
        }
        else
            res.status(200).send({
                success: 'true',
                data: data,
                })
        
    })
}