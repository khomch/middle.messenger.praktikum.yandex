import { IUserData } from "../interfaces/IUser";
import { IChatUser, IUsersRequest } from "../interfaces/IApi";
import { HTTPTransport } from "../utils/HTTPTransport";

export interface IChatsData {
  id: number;
  title: string;
  avatar: string;
  unread_count: string;
  last_message: {
    user: IUserData;
    time: string;
    content: string;
  }
}

export class ChatsAPI extends HTTPTransport {
  constructor() {
    super('/chats');
  }

  read(): Promise<IChatsData[]> {
    return this.get('/');
  }

  create(data: { title: string }): Promise<void> {
    return this.post('/', data);
  }

  deleteChat(data: { chatId: number }): Promise<{ chatId: number }> {
    return this.delete('/', data);
  }

  getChatUsersReq(query: string): Promise<IChatUser[]> {
    return this.get(`/${query}/users`);
  }

  addChatUserReq(data: IUsersRequest): Promise<void> {
    return this.put(`/users/`, data);
  }

  removeChatUserReq(data: IUsersRequest): Promise<void> {
    return this.delete(`/users/`, data);
  }

  update = undefined;
}

export default new ChatsAPI();