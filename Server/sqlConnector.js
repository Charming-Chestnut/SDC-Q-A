const sql = require('mysql2')

var connection = sql.createConnection({
  user: "root",
  password: "",
  database: 'QandA'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection