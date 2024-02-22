import server from './src/app.ts';
import { conn } from './src/db.ts';
const port = 5432;

conn.sync({ force: true}).then(() => {
  server.listen(port, () => {
    console.log(`🙌 Server listening at ${port}`); 
  });
});
