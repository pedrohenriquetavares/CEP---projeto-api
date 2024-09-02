const { Sequelize, Datatypes} = require('sequelize');
const sequelize = new require('sequelize::memory:');

const User  = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CEP: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Complemento: {
            type: DataTypes.STRING,
        },
        Bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MunicipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
    sequeLize,
    modelName: 'Endereco',  
    tableName: 'enderecos',
    timestamps: true,

    }
);
module.exports = Endereco;

//create DataBase API nodeCcdq