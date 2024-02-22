import { Sequelize } from "sequelize";
require("dotenv").config();

const password = process.env.PASSWORD;
const sequelize = new Sequelize("postgres", "LibertumMarketplace", password, {
  host: "marketplace--db--develop.postgres.database.azure.com",
  dialect: "postgres",
  port: 5432,
  ssl: false,
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

export const conn = sequelize;
