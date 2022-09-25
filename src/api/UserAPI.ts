import { BaseAPI } from "./BaseAPI";
import { IChangePassword, IChangeProfile } from "../interfaces/IApi";

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeProfileReq(data:  IChangeProfile): Promise<IChangeProfile & {id: string}> {
    return this.http.put('/profile', data);
  }

  changeAvatarReq(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  changePasswordReq(data: IChangePassword) {
    return this.http.put('/password', data);
  }

  findUserReq(data: { login: string }) {
    return this.http.post('/search', data);
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();