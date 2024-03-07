import { Sequelize } from "sequelize-typescript";
require("dotenv").config();

const password = process.env.PASSWORD;
const sequelize = new Sequelize("postgres", "LibertumMarketplace", password, {
  host: "marketplace--db--develop.postgres.database.azure.com",
  dialect: "postgres",
  port: 5432,
  ssl: false,
  models: [__dirname + "/models/**/*.model.ts"], // Automatic model discovery
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to PostgreSQL Flexible Server established successfully.",
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

export { sequelize };
