const sql = require("./db.js");

class DatabasePostgres {
  async listar() {
    const capturandoDados = await sql`select * from sensores`;
    return capturandoDados;
  }
  async gravar(dados) {
    const { temperatura, umidade } = dados;
    await sql`valores = ${temperatura}, ${umidade}`.then(() => {
      console.log(`temperatura: ${temperatura}, umidade: ${umidade}`);
    });
  }
}
module.exports = DatabasePostgres;
