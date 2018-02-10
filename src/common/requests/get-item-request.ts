import { Request } from '../infrastructure/decorators';
import { Method } from '../infrastructure/method';

@Request({
  method: Method.Get,
  url: '/items/:id',
})
export class GetItemRequest {
  id: string;
}

export class GetItemResponse {
  id: string;
  constructor(params?: Partial<GetItemResponse>) {
    Object.assign(this, params);
  }
}
