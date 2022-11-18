var mysql = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
};

function connect() {
  var connection = mysql.createConnection({
    dbConfig,
  });
  // Conecta no banco de dados
  connection.connect();
  return connection;
};

module.exports = {
  connect,
};
