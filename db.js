const path = require("path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  // Tells Sequelize what dialect of SQL we are using.
  dialect: "sqlite",

  // Tells Sequelize the absolute path to the SQLite database.
  storage: path.join(__dirname, "blog.db"),
});

module.exports = sequelize;
