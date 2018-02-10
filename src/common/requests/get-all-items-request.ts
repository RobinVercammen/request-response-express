import { Return } from './../infrastructure/return';
import { Request } from './../infrastructure/decorators';
import { Method } from '../infrastructure/method';

@Request({
  method: Method.Get,
  url: '/items',
})
export class GetAllItemsRequest implements Return<GetAllItemsResponse> {

}

export class GetAllItemsResponse {
  constructor(public items: string) {
  }
}
