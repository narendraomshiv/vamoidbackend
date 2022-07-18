const mysql = require('mysql');


const conn = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: "userauth"	
});


conn.connect(function(err){
	if(err)throw err;
	console.log("database connected successfully");
})

module.exports= conn;