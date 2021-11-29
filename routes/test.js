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


module.exports = router;