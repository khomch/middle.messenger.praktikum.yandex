import store from "./Store";
import { BASE_URL } from "./fetch";


const newToken = {token: ''}

fetch(`${BASE_URL}/chats/token/239`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
})
  .then(response => response.json())
  .then(data => {
    newToken.token = data.token // Получаем строку
  });

document.cookie = 'X-Authorization=' + newToken.token + '; path=/';

let userId = ''

export const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/239/${newToken.token}`);

if (store.state.user !== undefined) {
  userId = store.state.user
}

socket.addEventListener('open', () => {
  console.log('Соединение установлено');

  socket.send(JSON.stringify({
    content: 'Моё первое сообщение миру!',
    type: 'message',
  }));

  socket.send(JSON.stringify({
    content: 'Моё второе сообщение миру!',
    type: 'message',
  }));
});

socket.addEventListener('close', event => {
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения');
  }

  console.log(`Код: ${event.code} | Причина: ${event.reason}`);
});

socket.addEventListener('message', event => {
  console.log('Получены данные', event.data);
});

socket.addEventListener('error', event => {
  console.log('Ошибка', event);
});
