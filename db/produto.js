const Sequelize = require("sequelize");
const database = require("./conexao");

const Produto = database.define("produto", 
{

id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true    
},
nome:{
    type: Sequelize.STRING(255),
    allowNull: false
},
preco:{
    type: Sequelize.DOUBLE
},
descricao:{
    type: Sequelize.STRING(255)
}

});

module.exports = Produto;