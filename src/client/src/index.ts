import { Dispatcher } from './dispatcher';
import { GetItemRequest, GetItemResponse } from '../../common/requests/get-item-request';
import { AddItemRequest, AddItemResponse } from '../../common/requests/add-item-request';

const dispatcher = new Dispatcher('');

dispatcher.execute(GetItemRequest, { id: '5' }, GetItemResponse)
  .then((res) => {
    document.getElementById('content').innerHTML = res.id;
  });


document.getElementById('text').onkeyup = (e) => {
  const val = (e.target as HTMLInputElement).value;

  dispatcher.execute(AddItemRequest, { id: '5', title: val }, AddItemResponse)
    .then((res) => {
      document.getElementById('content').innerHTML = res.id + res.title;
    });

};
