import { RequestHandler } from './../infrastructure/requesthandler';
import { GetAllItemsRequest, GetAllItemsResponse } from './../../common/requests/get-all-items-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(GetAllItemsRequest, GetAllItemsResponse)
export class GetAllItemsRequestHandler
  implements RequestHandler<GetAllItemsRequest, GetAllItemsResponse> {
  handle(request: GetAllItemsRequest): GetAllItemsResponse {
    return {
      items: 'qdskjmlsdkfjklmsd',
    };
  }

}
