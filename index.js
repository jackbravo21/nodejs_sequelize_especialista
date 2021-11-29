const express = require("express");
const app = express();
const port = 3000;
const index = require("./routes/index");
const selecionar = require("./routes/select");
const buscar = require("./routes/find");
const adicionar = require("./routes/add");
const editar = require("./routes/edit");
const deletar = require("./routes/delete");
const testar = require("./routes/test");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/select", selecionar);
app.use("/find", buscar);
app.use("/add", adicionar);
app.use("/edit", editar);
app.use("/delete", deletar);
app.use("/test", testar);

//========================================================================================

//funcao IIFE (testa conexao com o banco de dados e exibe no console);
(async()=>{
    const conn = require("./db/conexao");

    try {
        const resultado = await conn.sync();
        console.log("\x1b[36m%s\x1b[0m", "Conectado ao banco de dados com sucesso!");
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }
})();

//========================================================================================

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});