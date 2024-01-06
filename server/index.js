const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aomcl",
  database: "nunes_sports",
});

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  connection.query(
    "SELECT * FROM nunes_sports.products",
    function (err, results) {
      console.log(results); // results contains rows returned by server
      return res.json(results);
    }
  );
});

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("rodando servidor");
});
