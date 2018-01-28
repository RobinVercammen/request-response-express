import { Return } from './return';

export interface RequestHandler<TRequest extends Return<TResponse>, TResponse> {
  handle(request: TRequest): TResponse;
}
