import { RequestHandler } from './../infrastructure/requesthandler';
import { GetAllItemsRequest, GetAllItemsResponse } from './../../common/requests/get-all-items-request';
import { Handler } from './../../common/infrastructure/decorators';

@Handler(GetAllItemsRequest, GetAllItemsResponse)
export class GetAllItemsRequestHandler
  implements RequestHandler<GetAllItemsRequest, GetAllItemsResponse> {
  async handle(request: GetAllItemsRequest) {
    return {
      items: 'qdskjmlsdkfjklmsd',
    };
  }

}
