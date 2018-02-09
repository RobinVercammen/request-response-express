import * as express from 'express';
import { Container } from './infrastructure/container';
import { handlers } from './handlers/handlers';
import { json } from 'body-parser';

class App {
  container: Container;
  public express: express.Express;

  constructor() {
    this.express = express();
    this.express.use(json());
    this.express.use(express.static('src/client/dist'));
    this.container = new Container();
    this.container.registerHandlers(...handlers as any);
    this.useHandlers();
  }

  private useHandlers() {
    const router = express.Router();
    this.container.useHandlers(router);
    this.express.use('/', router);
  }

}

export default new App().express;
