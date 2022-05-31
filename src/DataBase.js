const mysql = require('mysql2');
const mysqlConect = mysql.createConnection({
    host:'localhost',
    database:'marketplaceutbone',
    user:'root',
    password:'2001',
});

mysqlConect.connect(function(err){
    if(err){ 
        console.log(err);
        return;
    }else{
        console.log('Database is connected')
    }
});

module.exports = mysqlConect;