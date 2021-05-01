const mysql = require('mysql'); //  Installing mysql instructions per https://www.npmjs.com/package/mysql
const connection = mysql.createConnection({ 
    host: "localhost", 
    user: "Nate", 
    password: "secret"
}); 


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack); 
        return;
    }

    console.log("connected as id " + connection.threadID); 

})










/*  installation  */
/*
.used npm install mysql before writing any code. 
.
.
.
.
*/