const express = require("express");
const router = express.Router();
const Produto = require("../db/produto");

router.put("/pk", async(req, res) => {
    
    //recebendo todos os dados;
    const id = req.body.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;

    //busca os dados do produto, recebe e armazena na variavel produtoEditado, igual no laravel;
    const produtoEditado = await Produto.findByPk(id);

    //se nao encontrar o produto, da o erro em tela;
    if(produtoEditado === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }

    else{
    //pega os dados dos campos e reatribui os valores, igual no laravel;        
    produtoEditado.nome = nome;
    produtoEditado.preco = preco;
    produtoEditado.descricao = descricao;
    
    //metodo save, igual no Laravel;
    const salvarAlteracao = await produtoEditado.save();
    
    console.log(salvarAlteracao);
    res.send(salvarAlteracao);
    }
});

module.exports = router;