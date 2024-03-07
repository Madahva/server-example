import server from "./src/app.ts";
import { sequelize } from "./src/db.ts";
const port = 5432;

sequelize.sync({ force: true}).then(() => {
  server.listen(port, () => {
    console.log(`🙌 Server listening at ${port}`);
  });
});
