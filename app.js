const express = require("express");
const DatabasePostgres = require("./db-postgres");
const app = express();

const database = new DatabasePostgres();

app.get("/", function (requisicao, resposta) {
  resposta.send("index");
});

app.get("/dados", async (req, res) => {
  const temperatura = req.params.temperatura;
  const umidade = req.params.umidade;
  await database.gravar({
    temperatura,
    umidade,
  });
  res.status(201).send();
});

app.get("/listar", async (req, res) => {
  const lista = await database.listar();
  res.send(lista);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`porta ${PORT}`);
});
