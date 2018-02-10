import app from './app';
import { MongoClient, Db } from 'mongodb';

const port = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'req-res';

const getDb = () => {
  return new Promise<Db>((res) => {
    MongoClient.connect(url, (err, client) => {
      res(client.db(dbName));
    });
  });
};

const main = async () => {
  const db = await getDb();
  app.registerDb(db);
  app.express.listen(port, (err) => {
    if (err) {
      return console.log(err);
    }

    return console.log(`server is listening on ${port}`);
  });
};

main();
