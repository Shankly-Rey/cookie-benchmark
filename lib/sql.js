const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'enserver',
  password : 'XXXXXXXXX',
  database : 'entalk'
});
 
connection.connect(function(err) {
    if(err) {
        console.error("[en-sql] Error occured: " + err.stack);
        return;
    }

    console.log("[en-sql] Connected to database");
})

exports.Query = function(Query, Fill, Callback) {
    connection.query(Query, Fill, Callback);
}

