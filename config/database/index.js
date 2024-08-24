constSequelize = require('sequelize')
const config = require('../config/database')

constEndereco = require('../model/endereco')

const connection = newSequelize(config)

Endereco.init(connection)
Endereco.associate(connection.model)

module.exports = connection