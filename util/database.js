const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Nick736101***", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
