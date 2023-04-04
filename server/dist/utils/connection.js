"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize('condigital', //database name
'root', // user
'', //password
{
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
