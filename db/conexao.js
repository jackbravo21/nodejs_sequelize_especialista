const Sequelize = require("sequelize");

/*
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});
*/

const sequelize = new Sequelize("teste_sequelize", "root", "", {
        host: "localhost", dialect: "mysql"
});

sequelize
    .authenticate()
    .then(() => {
            console.log("Conectado com sucesso!");
    })
    .catch((error) => {
            console.log("Erro ao conectar com DB!", erro);
    });

//sequelize.close()

module.exports = sequelize;