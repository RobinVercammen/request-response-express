import { RequestHandler } from './../infrastructure/requesthandler';
import { GetItemRequest, GetItemResponse } from './../../common/requests/get-item-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(GetItemRequest, GetItemResponse)
export class GetItemRequestHandler
  implements RequestHandler<GetItemRequest, GetItemResponse> {
  handle(request: GetItemRequest): GetItemResponse {
    return {
      id: request.id,
    };
  }

}
