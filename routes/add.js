const express = require("express");
const router = express.Router();
const Produto = require("../db/produto");

router.post("/add_body", async(req, res) => {

    //const {postNome, postPreco, postDescricao} = req.body;
    const postNome = req.body.nome;
    const postPreco = req.body.preco;
    const postDescricao = req.body.descricao;

    const adicionar = await Produto.create({
        nome: postNome,
        preco: postPreco,
        descricao: postDescricao
    })
    console.log(adicionar);
    res.send(adicionar);
});

router.post("/add_object", async(req, res) => {

    //const {postNome, postPreco, postDescricao} = req.body;
    const adicionar = await Produto.create(req.body);
    console.log(adicionar);
    res.send(adicionar);
});


module.exports = router;