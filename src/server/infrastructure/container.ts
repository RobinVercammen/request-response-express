import { RequestFactory } from './../../common/infrastructure/request-factory';
import { RequestHandler } from './requesthandler';
import { Router } from 'express';
import { Method } from './../../common/infrastructure/method';
import { ResponseFactory } from '../../common/infrastructure/response-factory';

interface RequestHandlerFactory<TRequest, TResponse> {
  from: string;
  to: string;
  request: RequestFactory<TRequest>;
  response: ResponseFactory<TResponse>;
  new(): RequestHandler<TRequest, TResponse>;
}

export class Container {
  private handlers: RequestHandlerFactory<any, any>[] = [];
  registerHandlers(...handlers: RequestHandlerFactory<any, any>[]) {
    this.handlers = [...this.handlers, ...handlers];
  }
  useHandlers(router: Router) {
    this.handlers.forEach((handlerFactory) => {
      let method = '';
      switch (handlerFactory.request.method) {
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
      router[method](handlerFactory.request.url, (expressReq, expressRes) => {
        const handler = new handlerFactory();
        const request = handlerFactory.request;
        const req = Object.assign(new request(), expressReq.params, expressReq.body);
        const result = handler.handle(req);
        expressRes.json(result);
      });
    });
  }
}
