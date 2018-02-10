import { RequestHandler } from './../infrastructure/requesthandler';
import { AddItemRequest, AddItemResponse } from './../../common/requests/add-item-request';
import { Handler } from './../../common/infrastructure/decorators';
import { Db } from 'mongodb';

@Handler(AddItemRequest, AddItemResponse)
export class AddItemRequestHandler
  implements RequestHandler<AddItemRequest, AddItemResponse> {
  constructor(private db: Db) {

  }
  async handle(request: AddItemRequest) {
    await this.db.collection('items').updateOne({ id: request.id }, { $set: request }, { upsert: true });

    return {
      id: request.id,
      title: request.title,
    };
  }

}
