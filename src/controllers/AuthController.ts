import API, { AuthAPI, ISigninData, ISignUpData } from "../api/AuthAPI";
import store from '../utils/Store';
import { BASE_URL } from "../utils/HTTPTransport";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);

    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();

      store.set('user', {...user, avatar: user.avatar !== null ? `${BASE_URL}/resources${user.avatar}` : null});

    } catch (e: any) {
      console.error('Error in fetchUser', e);
    }

  }

  async logout() {
    try {
      await this.api.logout();

    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new AuthController();