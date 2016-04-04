var mysql = require('mysql');
var fs = require('fs');

var db = mysql.createConnection({
  connectionLimit: 15,
  host: 'localhost',
  user: require('./config.js').db.user,
  password: require('./config.js').db.password,
  database: require('./config.js').db.database,
  multipleStatements: true
});

db.on('error', function(){
  console.error("ERROR IN DATABASE");
});

fs.readFile(__dirname + '/setup.sql', 'utf-8', function(err,data){
  if(err){
    console.error(err);
  } else {
    data = data.split(";");
    data.pop();
    data.forEach(function(item, i){
      db.query(item, function(err, results, fields){
        if(err){
          console.error(err);
        } else {
          console.log(i + 1 + '. SQL Setup');
        }
      });
    });
  }
});

setInterval(function(){
  db.query('SELECT 1');
}, 5000);

module.exports = db;
