const express = require("express");
const router = express.Router();
const Produto = require("../db/produto");

router.delete("/pk", async(req, res) => {
    
    const id = req.body.id;

    const produtoDeletar = await Produto.findByPk(id);

    //se nao encontrar o produto, da o erro em tela;
    if(produtoDeletar === null){
        console.log(`Objeto número ${id} não existe!`);
        res.send(`Objeto número ${id} não existe!`);    
    }

    else{

    produtoDeletar.destroy();    
    
    console.log(`O produto ${id} foi DELETADO com SUCESSO!`);
    res.send(`O produto ${id} foi DELETADO com SUCESSO!`);
    }
});

module.exports = router;