import { Method } from './method';

export interface RequestFactory<T> {
  method?: Method;
  url?: string;
  new(params?: Partial<RequestFactory<T>>): T;
}
