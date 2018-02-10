import { Method } from './method';

export interface HandlerFactory<T> {
  method: Method;
  url: string;
  new(): T;
}
