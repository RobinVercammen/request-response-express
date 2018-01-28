import { RequestHandler } from './../infrastructure/requesthandler';
import { AddItemRequest, AddItemResponse } from './../requests/add-item-request';
import { Handler } from '../infrastructure/decorators';

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
