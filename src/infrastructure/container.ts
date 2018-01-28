import { RequestHandler } from './requesthandler';
import { Router } from 'express';
import { RequestClass } from './decorators';
import { Method } from './method';

interface RequestHandlerFn extends Function {
  from: string;
  to: string;
  request: RequestClass;
  response: { new() };
  new(): RequestHandler<any, any>;
}

export class Container {
  private handlers: RequestHandlerFn[] = [];
  registerHandlers(...handlers: RequestHandlerFn[]) {
    this.handlers = [...this.handlers, ...handlers];
  }
  useHandlers(router: Router) {
    this.handlers.forEach((handlerFn) => {
      let method = '';
      switch (handlerFn.request.method) {
        case Method.Get:
          method = 'get';
          break;
        case Method.Post:
          method = 'post';
          break;
        case Method.Put:
          method = 'put';
          break;
        case Method.Delete:
          method = 'delete';
          break;
      }
      router[method](handlerFn.request.url, (expressReq, espressRes) => {
        const handler = new handlerFn();
        const request = handlerFn.request;
        const req = Object.assign(new request(), expressReq.params, expressReq.body);
        const result = handler.handle(req);
        espressRes.json(result);
      });
    });
  }
}
