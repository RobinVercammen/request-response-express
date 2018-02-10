import { Db } from 'mongodb';
import { RequestHandler } from './../infrastructure/requesthandler';
import { GetItemRequest, GetItemResponse } from './../../common/requests/get-item-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(GetItemRequest, GetItemResponse)
export class GetItemRequestHandler
  implements RequestHandler<GetItemRequest, GetItemResponse> {

  constructor(private db: Db) {

  }

  handle(request: GetItemRequest) {
    return {
      id: request.id,
    };
  }

}
