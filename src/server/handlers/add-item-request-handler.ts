import { RequestHandler } from './../infrastructure/requesthandler';
import { AddItemRequest, AddItemResponse } from './../../common/requests/add-item-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(AddItemRequest, AddItemResponse)
export class AddItemRequestHandler
  implements RequestHandler<AddItemRequest, AddItemResponse> {
  handle(request: AddItemRequest): AddItemResponse {
    return {
      id: request.id,
      title: request.title,
    };
  }

}
