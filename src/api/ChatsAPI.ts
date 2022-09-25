import { BaseAPI } from "./BaseAPI";
import { IUserData } from "../interfaces/IUser";
import { IUsersRequest } from "../interfaces/IApi";

export interface IChatsData {
  id: number,
  title: string,
  avatar: string,
  unread_count: string,
  last_message: {
    user: IUserData,
    time: string,
    content: string
  }
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(): Promise<IChatsData> {
    return this.http.get('/');
  }

  create(data: { title: string }) {
    return this.http.post('/', data);
  }

  delete(data: { chatId: number }) {
    return this.http.delete('/', data);
  }

  getChatUsersReq(query: string) {
    return this.http.get(`/${query}/users`);
  }

  addChatUserReq(data: IUsersRequest) {
    return this.http.put(`/users/`, data);
  }

  removeChatUserReq(data: IUsersRequest) {
    return this.http.delete(`/users/`, data);
  }

  update = undefined;
}

export default new ChatsAPI();