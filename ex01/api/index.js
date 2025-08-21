import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Giullya");
});

app.listen(3000, () => {
  console.log(":D");
});