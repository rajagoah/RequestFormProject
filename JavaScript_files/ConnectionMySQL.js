var mysql = require('mysql');

var con = mysql.createConnection({
  host: "Aakarshs-MacBook-Pro.local",
  user: "root",
  password: "P@ssw0rd1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO sampledb.sampleTab (first_name, last_name, content_ind, content_team_status) VALUES ('Aakarsh', 'Rajagopalan','yes','in progress')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});