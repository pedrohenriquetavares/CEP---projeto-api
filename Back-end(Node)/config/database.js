const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'usuario',
    password: 'senha',
    database: 'api-node',
    define: {
        timestamps: true,
        underscored: true
    }
}


