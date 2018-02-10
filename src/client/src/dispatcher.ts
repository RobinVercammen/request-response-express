import { ResponseFactory } from './../../common/infrastructure/response-factory';
import { RequestFactory } from './../../common/infrastructure/request-factory';
import { Method } from '../../common/infrastructure/method';

export class Dispatcher {
  rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  execute<TRequest, TResponse>(request: RequestFactory<TRequest>, params: TRequest, responseFactory: ResponseFactory<TResponse>): Promise<TResponse> {
    let url = request.url;
    Object.keys(params).forEach((k) => {
      url = url.replace(`:${k}`, params[k]);
    });
    url = `${this.rootUrl}${url}`;
    let options: any = {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: Method[request.method],
    };

    if (request.method !== Method.Get) {
      options = {
        ...options,
        body: JSON.stringify(params),
      };
    }
    return fetch(url, options).then(r => r.json()).then(r => new responseFactory(r));
  }
}
