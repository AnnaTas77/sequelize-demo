const User = require("./models/User.js");
const sequelize = require("./db.js");

async function seed() {
  const users = await User.bulkCreate([
    // Data borrowed from https://jsonplaceholder.typicode.com/users
    { id: 1, username: "Bret", email: "Sincere@april.biz" },
    { id: 2, username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, username: "Clementine Bauch", email: "Nathan@yesenia.net" },
  ]);

  return users;
}

async function main() {
  // Synchronizes the models with the database. The force option forces the
  // tables to be dropped and recreated each time. This would not be used in
  // production but I have included it in this demo to make it repeatable.
  await sequelize.sync({ force: true });

  // Seeds the database with some dummy data.
  await seed();

  // Equivalent to: SELECT * FROM Users WHERE id = 1;
  const user = await User.findByPk(1);

  // Logs the JSON representation of the user.
  console.log(user.toJSON());
}

main();
