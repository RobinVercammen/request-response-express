import { Method } from './method';
import { Return } from './return';

// tslint:disable-next-line:function-name
export function Handler(request: Function, response: Function) {
  return function (target) {
    target.request = request;
    target.from = request.name;
    target.response = response;
    target.to = response.name;
  };
}

export interface RequestClass extends Function {
  method: Method;
  url: string;
  new(): Return<any>;
}

// tslint:disable-next-line:function-name
export function Request({ method, url }: { method: Method, url: string }) {
  return function (target) {
    const t = target as RequestClass;
    t.url = url;
    t.method = method;
  };
}
