import { RequestHandler } from './../infrastructure/requesthandler';
import { GetItemRequest, GetItemResponse } from './../requests/get-item-request';
import { Handler } from '../infrastructure/decorators';

@Handler(GetItemRequest, GetItemResponse)
export class GetItemRequestHandler
    implements RequestHandler<GetItemRequest, GetItemResponse> {
  handle(request: GetItemRequest): GetItemResponse {
    return {
      id: request.id,
    };
  }
  
}
