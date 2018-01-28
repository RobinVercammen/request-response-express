import { RequestHandler } from './../infrastructure/requesthandler';
import { GetAllItemsRequest, GetAllItemsResponse } from './../requests/get-all-items-request';
import { Handler } from '../infrastructure/decorators';

@Handler(GetAllItemsRequest, GetAllItemsResponse)
export class GetAllItemsRequestHandler
    implements RequestHandler<GetAllItemsRequest, GetAllItemsResponse> {
  handle(request: GetAllItemsRequest): GetAllItemsResponse {
    return {
      items: 'qdskjmlsdkfjklmsd',
    };
  }
  
}
