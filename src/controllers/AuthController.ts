import API, { AuthAPI, ISigninData, ISignUpData } from "../api/AuthAPI";
import store from '../utils/Store';
import router from '../utils/Router';
import { BASE_URL } from "../utils/HTTPTransport";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);

      router.go('/messenger');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/messenger');
    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();

      if ((location.pathname === '/login') || location.pathname === '/' && user) {
        router.go('/messenger');
      }

      store.set('user', {...user, avatar: user.avatar !== null ? `${BASE_URL}/resources${user.avatar}` : null});

    } catch (e: any) {
      console.error(e);
    }

  }

  async logout() {
    try {
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new AuthController();