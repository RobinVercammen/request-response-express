import { ResponseFactory } from './response-factory';
import { RequestFactory } from './request-factory';
import { Method } from './method';

// tslint:disable-next-line:function-name
export function Handler<TRequest, TResponse>(request: RequestFactory<TRequest>, response: ResponseFactory<TResponse>) {
  return function (target) {
    target.request = request;
    target.from = request.name;
    target.response = response;
    target.to = response.name;
  };
}



// tslint:disable-next-line:function-name
export function Request({ method, url }: { method: Method, url: string }) {
  return function <T>(target: RequestFactory<T>) {
    target.url = url;
    target.method = method;
  };
}
