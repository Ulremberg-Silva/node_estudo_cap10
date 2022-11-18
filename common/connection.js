var mysql = require('mysql2');

function connect() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "livro",
    password: "livro123",
    database: "livro",
  });
  // Conecta no banco de dados
  connection.connect();
  return connection;
}
module.exports = {
  connect,
};
