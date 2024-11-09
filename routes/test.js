const express = require("express");
const router = express.Router();
const conn = require("../db/conexao");
const Produto = require("../db/produto");
//const Op = Sequelize.Op;

router.post("/teste", (req, res) => {
    
    console.log(req.data);
    console.log(req.body);
    console.log(req.params);

    res.json({Data: "Testado!"});
});

router.post("/testedata", (req, res) => {
    
    const postNome = req.body.nome;
    const postPreco = req.body.preco;
    const postDescricao = req.body.descricao;
   
    console.log(postNome, " | ", postPreco, " | ", postDescricao);
    res.json({postNome, postPreco, postDescricao});
});

router.get("/search", (req, res) => {
    
    //http://localhost:3000/test/search/?term=nodejs
    const term = req.query.term;

    console.log(`O termo de busca: ${term}`);
    res.send(`O termo de busca: ${term}`);
});

module.exports = router;
