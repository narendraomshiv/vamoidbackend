const AddMetaDataModel = require('../../../vemo-id-backend-merchant/models/ManageApplication/AddMetaDataModel')

exports.addmetadata = (req,res)=>{
    AddMetaDataModel.AddMetaData(req,(err,data)=>{
        if(err){
            res.status(500).send({
                success: 'true',
                message: err.message || 'error'
            })
        }

        else{
            res.status(200).send({
                success: 'true',
                message: res.message || 'Meta Data Created Successfully',
                data: data
            })
        }
    })
}