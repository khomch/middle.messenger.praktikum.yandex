import API from "../api/ChatsAPI";
import store from '../utils/Store';
import { ChatsAPI } from "../api/ChatsAPI";
import { IUsersRequest } from "../interfaces/IApi";

export class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async getChats() {
    try {
      const chats = await this.api.read();
      store.set('chats', chats);
    } catch (e: any) {
      console.error(e);
    }
  }

  async createChat(data: { title: string }) {
    try {
      await this.api.create(data);
      await this.getChats()

    } catch (e: any) {
      console.error(e);
    }
  }

  async deleteChat(data: { chatId: number }) {
    try {
      await this.api.deleteChat(data);

      await this.getChats()


    } catch (e: any) {
      console.error(e);
    }
  }

  async getChatUsers(data: string) {
    try {
      await this.api.getChatUsersReq(data);


    } catch (e: any) {
      console.error(e);
    }
  }

  async addChatUser(data: IUsersRequest) {
    try {
      await this.api.addChatUserReq(data);


    } catch (e: any) {
      console.error(e);
    }
  }

  async removeChatUser(data: IUsersRequest) {
    try {
      await this.api.removeChatUserReq(data);

    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new ChatsController();