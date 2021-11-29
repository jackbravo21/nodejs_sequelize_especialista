const express = require("express");
const router = express.Router();
const Produto = require("../db/produto");
const Sequelize = require("sequelize");         //preciso importar o sequelize para o "like";
const conn = require("../db/conexao");
const Op = Sequelize.Op;                        //preciso importar o Op para poder usar a funcao no "like";

//busca por referencias a nome;
router.post("/nome", async(req, res) => {

    const obNome = req.body.nome;
    
    const selecionar = await Produto.findAll({ 
        where: {
            descricao: {
                [Op.like]: `%${obNome}%`
            }
          },
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca por referencias a descricao;
router.post("/descricao", async(req, res) => {

    const obdescricao = req.body.descricao;
    
    const selecionar = await Produto.findAll({ 
        where: {
            descricao: {
                [Op.like]: `%${obdescricao}%`
            }
          },
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca por referencias sem a string solicitada no nome;
router.post("/sem/nome", async(req, res) => {

    const obNome = req.body.nome;
    
    const selecionar = await Produto.findAll({ 
        where: {
            nome: {
                [Op.notLike]: `%${obNome}%`
            }
          },
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca por referencias sem a String na descricao;
router.post("/sem/descricao", async(req, res) => {

    const obdescricao = req.body.descricao;
    
    const selecionar = await Produto.findAll({ 
        where: {
            descricao: {
                [Op.notLike]: `%${obdescricao}%`
            }
          },
    });
    console.log(selecionar);
    res.send(selecionar);
});

//SELECT * FROM produto WHERE nome = req.body.nome AND descricao = req.body.descricao;
router.post("/nome/descricao", async(req, res) => {

    const obNome = req.body.nome;
    const obDescricao = req.body.descricao;
    
    const selecionar = await Produto.findAll({ 
        where: {
            descricao: {
                [Op.or]: [[{nome: obNome}, {descricao: obDescricao}]]
            }
          },
    });
    console.log(selecionar);
    res.send(selecionar);
});

module.exports = router;

//falta a contagem de resultados e /nome/descricao ta errado;