import API  from "../api/ChatsAPI";
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
      console.log(chats)
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

  async deleteChat(data: { chatId: string }) {
    try {
      const result = await this.api.delete(data);
      console.log(result)
      await this.getChats()


    } catch (e: any) {
      console.error(e);
    }
  }

  async getChatUsers(data: string) {
    try {
      const result = await this.api.getChatUsersReq(data);
      console.log(result)

    } catch (e: any) {
      console.error(e);
    }
  }

  async usersRequest(data: IUsersRequest) {
    try {
      const result = await this.api.usersRequestReq(data);
      console.log(result)

    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new ChatsController();