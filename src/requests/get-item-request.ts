import { Return } from './../infrastructure/return';
import { Request } from './../infrastructure/decorators';
import { Method } from '../infrastructure/method';

@Request({
  method: Method.Get,
  url: '/items/:id',
})
export class GetItemRequest implements Return<GetItemResponse> {
  id: string;
}

export class GetItemResponse {
  constructor(public id: string) {
  }
}
