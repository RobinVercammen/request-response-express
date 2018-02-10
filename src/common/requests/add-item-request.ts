import { Request } from './../infrastructure/decorators';
import { Method } from '../infrastructure/method';

@Request({
  method: Method.Post,
  url: '/items/:id',
})
export class AddItemRequest {
  id: string;
  title: string;
}

export class AddItemResponse {
  id: string;
  title: string;
  constructor(params?: Partial<AddItemResponse>) {
    Object.assign(this, params);
  }
}
