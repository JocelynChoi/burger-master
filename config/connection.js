var mysql = require("mysql");

var dbconfig = process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Suanmokk54!$",
  database: "burgers_db"
};

var connection = mysql.createConnection(dbconfig);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
