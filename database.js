const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "sql3.freemysqlhosting.net",
  user: "sql3396054",
  password: "MwL23eqNn5"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Database connected and ready. ');
});