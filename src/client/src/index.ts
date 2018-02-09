import { Dispatcher } from './dispatcher';
import { GetItemRequest, GetItemResponse } from '../../requests/get-item-request';
import { AddItemRequest, AddItemResponse } from '../../requests/add-item-request';

const dispatcher = new Dispatcher('');

dispatcher.execute<GetItemRequest, GetItemResponse>(GetItemRequest as any, { id: '5' })
  .then((res) => {
    document.getElementById('content').innerHTML = res.id;
  });


document.getElementById('text').onkeyup = (e) => {
  const val = (e.target as HTMLInputElement).value;

  dispatcher.execute<AddItemRequest, AddItemResponse>(
    AddItemRequest as any,
    { id: '5', title: val })
    .then((res) => {
      document.getElementById('content').innerHTML = res.id + res.title;
    });

};
