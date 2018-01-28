import { Return } from './../infrastructure/return';
import { Request } from './../infrastructure/decorators';
import { Method } from '../infrastructure/method';

@Request({
  method: Method.Post,
  url: '/items/:id',
})
export class AddItemRequest implements Return<AddItemResponse> {
  id: string;
  title: string;
}

export class AddItemResponse {
  constructor(public id: string, public title: string) {
  }
}
