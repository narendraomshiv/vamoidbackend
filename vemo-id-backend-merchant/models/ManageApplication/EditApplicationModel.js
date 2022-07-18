const sql = require('../../../config/dbConnection');
exports.EditApplication = (request,result)=>{
  
  sql.query('SELECT COUNT(id) AS totalCount FROM tbl_application_list',(err,resq)=>{
    if (err) {
     
      result(err, null);
      return;
    }
     if(resq[0].totalCount>0)
     {
      sql.query(`UPDATE tbl_application_list SET application_name='${request.body.application_name}' , privacyPolicy = '${request.body.privacyPolicy}', tersmsOfUse = '${request.body.tersmsOfUse}',  description ='${request.body.description}' WHERE id = '${request.body.id}' `,(err,res)=>{
       
        if (err) {
          
          result(err, null);
          return;
        }
          result(null,res);
          return;
      });

   
     }
     else
     {
      sql.query(`INSERT INTO tbl_application_list  (application_name,privacyPolicy,tersmsOfUse,description)
      VALUE ('${request.body.application_name}', '${request.body.privacyPolicy}', '${request.body.tersmsOfUse}', '${request.body.description}');`,(err,res)=>{
        if (err) {
          console.log("testing3")
          result(err, null);
          return;
        }
          result(null,res);
          return;
      });
     }
   
    
  });

    
  }