import { Db } from 'mongodb';
import { RequestHandler } from './../infrastructure/requesthandler';
import { GetItemRequest, GetItemResponse } from './../../common/requests/get-item-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(GetItemRequest, GetItemResponse)
export class GetItemRequestHandler
  implements RequestHandler<GetItemRequest, GetItemResponse> {

  constructor(private db: Db) {

  }

  async handle(request: GetItemRequest) {
    const item = await this.db.collection('items').findOne({ id: request.id });
    console.log(item)
    return item;
  }

}
