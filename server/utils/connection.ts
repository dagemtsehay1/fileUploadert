const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'condigital', //database name
 'root', // user
 '', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export default sequelize;
