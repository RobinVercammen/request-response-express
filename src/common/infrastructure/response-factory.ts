export interface ResponseFactory<T> {
  new(params?: Partial<ResponseFactory<T>>): T;
}
