const sql = require("./db.js");

sql`
    CREATE TABLE sensores (
        temperatura FLOAT,
        umidade FLOAT
    );
`.then(() => {
  console.log("Tabela criada!");
});
