const express = require("express");
const router = express.Router();
const Produto = require("../db/produto");

//busca todos sem parametro;
router.get("/all", async(req, res) => {
    
    const selecionar = await Produto.findAll();
    console.log(selecionar);
    res.send(selecionar);
});

//conta os resultados;
router.get("/count", async(req, res) => {
    
    const selecionar = await Produto.findAndCountAll();

    const {count} = selecionar.count;

    console.log({Resultados: selecionar.count});                //3 formas de exibir no console;
    console.log("Resultado:", JSON.stringify(selecionar.count));
    console.log(selecionar.count);
    //console.log(selecionar.rows);                             //Se quiser exibir os resultados das linhas no console;
        
    //res.json({Resultados: selecionar.rows});                  //json das linhas;
    //res.send({Resultados: selecionar.rows});                  //send das linhas;]
    //res.json({Resultados: selecionar.count});                 //json contando o total de resultados;
    res.send({Resultado: selecionar.count + " registros"});     //send contando o total de resultados;
});

//pula os 5 primeiros resultados e limita a 5 resultados;
router.get("/all/offset", async(req, res) => {
    
    const selecionar = await Produto.findAll({ offset: 5, limit: 5 });
    console.log(selecionar);
    res.send(selecionar);
});

//busca pelo nome
router.post("/all", async(req, res) => {

    const nome = req.body.nome;
    
    const selecionar = await Produto.findAll({ where: {nome: nome}});
    console.log(selecionar);
    res.send(selecionar);
});

//busca todos por nome em ordem decrescente;
router.get("/all/desc", async(req, res) => {
    
    const selecionar = await Produto.findAll({
        order: [["nome", "DESC"]]
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca todos por nome em odem alfabetica;
router.get("/all/asc", async(req, res) => {
    
    const selecionar = await Produto.findAll({
        order: [["nome", "ASC"]]
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca por todos por ID em ordem decrescente;
router.get("/all/desc/id", async(req, res) => {
    
    const selecionar = await Produto.findAll({
        order: [["id", "DESC"]]
    });
    console.log(selecionar);
    res.send(selecionar);
});

//busca pela chave primaria param(get)
router.get("/pk/:id", async(req, res) => {
    
    const id = req.params.id;

    const selecionar = await Produto.findByPk(id);

    if(selecionar === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }
    else{
    console.log(selecionar);
    res.send(selecionar);
    }
});

//busca pela chave primaria(post)
router.post("/pk", async(req, res) => {
    
    const id = req.body.id;

    const selecionar = await Produto.findByPk(id);

    if(selecionar === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }
    else{
    console.log(selecionar);
    res.send(selecionar);
    }
});

//busca pelo ID param(get);
router.get("/one/:id", async(req, res) => {
    
    const id = req.params.id;

    const selecionar = await Produto.findOne({ where: {id: id}});
    
    if(selecionar === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }
    else{
    console.log(selecionar);
    res.send(selecionar);
    }
});

//busca pelo ID(post);
router.post("/one", async(req, res) => {
    
    const id = req.body.id;

    const selecionar = await Produto.findOne({ where: {id: id}});
    
    if(selecionar === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }
    else{
    console.log(selecionar);
    res.send(selecionar);
    }
});


module.exports = router;