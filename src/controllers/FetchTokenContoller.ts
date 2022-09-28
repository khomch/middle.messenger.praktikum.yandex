import API from "../api/FetchTokenAPI";
import store from '../utils/Store';
import { FetchTokenAPI } from "../api/FetchTokenAPI";

export class FetchTokenController {
  private readonly api: FetchTokenAPI;

  constructor() {
    this.api = API;
  }


  async getToken(data: number ) {
    try {
      const result = await this.api.getTokenReq(data);

      store.set('token', result.token)

    } catch (e: any) {
      console.error(e);
    }
  }

}

export default new FetchTokenController();