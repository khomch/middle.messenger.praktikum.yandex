import { HTTPTransport } from "../utils/HTTPTransport";


export class FetchTokenAPI extends HTTPTransport {
  constructor() {
    super('/chats/token/');
  }

  getTokenReq(chatId: number): Promise<any> {
    return this.post(`/${chatId}`, {
      mode: 'cors',
      credentials: 'include',
    });
  }

}

export default new FetchTokenAPI();