import { Request } from './../infrastructure/decorators';
import { Method } from './../infrastructure/method';

@Request({
  method: Method.Get,
  url: '/items',
})
export class GetAllItemsRequest {

}

export class GetAllItemsResponse {
  items: string;
  constructor(params?: Partial<GetAllItemsResponse>) {
    Object.assign(this, params);
  }
}
