const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db.js");

class User extends Model {
  // This is called a static initialization block. It lets us put the call to
  // User.init() INSIDE the class declaration, which I prefer.
  static {
    User.init(
      {
        // Creates two columns of type TEXT. Three columns are also created
        // automatically: id, createdAt, and updatedAt.
        username: DataTypes.TEXT,
        email: DataTypes.TEXT,
      },
      {
        // Short for sequelize: sequelize.
        // Associates the model with the Sequelize instance.
        sequelize,
      }
    );
  }
}

module.exports = User;
