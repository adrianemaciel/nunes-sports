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

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { description } = req.body;

  let SQL = "INSERT INTO products (name, cost, description ) VALUES( ?,?,?)";

  connection.query(SQL, [name, cost, description], (err, req) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: "ok" });
    }
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM nunes_sports.products";

  connection.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { idproducts, name, cost, description } = req.body;

  let SQL = `UPDATE nunes_sports.products SET name = "${name}", cost= ${cost}, description = "${description}" WHERE idproducts = ${idproducts}`;

  connection.query(
    SQL,
    [name, cost, description, idproducts],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ status: "ok" });
      }
    }
  );
});

app.delete("/delete/:idproducts", (req, res) => {
  const { idproducts } = req.params;

  let SQL = `DELETE FROM nunes_sports.products WHERE idproducts = ${idproducts}`;

  connection.query(SQL, [idproducts], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: "ok" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
