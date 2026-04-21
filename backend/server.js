const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//conexión a mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "candidatos_web"
});

//probar conexión
db.connect(err => {
  if (err) {
    console.log("Error de conexión");
  } else {
    console.log("Conectado a MySQL");
  }
});

//ruta prueba
app.get("/", (req, res) => {
  res.send("funcionando ando");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});

//login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email=? AND password=?";
  
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ ok: false });
    }

    if (result.length > 0) {
      res.json({ ok: true, mensaje: "Login correcto" });
    } else {
      res.json({ ok: false, mensaje: "Credenciales incorrectas" });
    }
  });
});

//registro
app.post("/register", (req, res) => {
  const { nombre, email, password } = req.body;

  const sql = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";

  db.query(sql, [nombre, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ ok: false, mensaje: "Error al registrar" });
    }

    res.json({ ok: true, mensaje: "Usuario registrado" });
  });
});