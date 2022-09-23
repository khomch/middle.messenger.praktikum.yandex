import API from "../api/UserAPI";
import store from '../utils/Store';
import { IChangePassword, IChangeProfile } from "../interfaces/IApi";
import { UserAPI } from "../api/UserAPI";

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async changeProfile(data: IChangeProfile) {
    try {
      const result = await this.api.changeProfileReq(data);
      store.set('user', result);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changeAvatar(data: any) {
    try {
      const result = await this.api.changeAvatarReq(data);
      store.set('user', result);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changePassword(data: IChangePassword) {
    try {
      await this.api.changePasswordReq(data);
    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new UserController();