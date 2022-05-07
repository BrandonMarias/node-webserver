require('dotenv').config()
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
//servir cpntenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Curso - Node",
    nombre: "Brandon Marias",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "Curso - Node",
    nombre: "Brandon Marias",
  })
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    titulo: "Curso - Node",
    nombre: "Brandon Marias",
  });
});

app.get("*", (req, res) => {
  res.sendFile("public/404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
