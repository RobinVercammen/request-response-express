import { Db } from 'mongodb';
import * as express from 'express';
import { Container } from './infrastructure/container';
import { handlers } from './handlers/handlers';
import { json } from 'body-parser';
import * as path from 'path';

class App {
  container: Container;
  public express: express.Express;

  constructor() {
    this.express = express();
    this.express.use(json());
    const clientPath = path.join(__dirname, '../client');
    this.express.use(express.static(clientPath));
    this.container = new Container();
    this.container.registerHandlers(...handlers as any);
    this.useHandlers();
  }


  private useHandlers() {
    const router = express.Router();
    this.container.useHandlers(router);
    this.express.use('/', router);
  }

  public registerDb(db: Db) {
    this.container.registerDb(db);
  }
}

export default new App();
