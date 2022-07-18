const sql = require("../../../config/dbConnection")
exports.DeleteAdminNotifications = (request,result)=>{ 
    
    sql.query('DELETE  FROM tbl_notifications  WHERE user_id = "'+request.body.user_id+'"', (err,res )=>{
        if(err){
            console.log('testing')
            result(err, null)
            return;
        }
        
        var userID = request.body.user_id
        var notificationID = request.body.notifiction_id

        if(userID ==  notificationID)
    sql.query('SELECT * FROM tbl_user_notification WHERE id = "'+request.body.id+'"', (error, rows)=>{
        if(err){
            console.log(error, null)
            console.log('error')
        }
        // {
        //     result(null, rows);
        //     return;
        // }
    })

    result(null,res)
    return;
    })
    
     
 }
