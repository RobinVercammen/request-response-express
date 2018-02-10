export interface RequestHandler<TRequest, TResponse> {
  handle(request: TRequest): TResponse;
}
