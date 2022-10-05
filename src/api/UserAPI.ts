import { IChangePassword, IChangeProfile } from "../interfaces/IApi";
import { IUserData } from "../interfaces/IUser";
import { HTTPTransport } from "../utils/HTTPTransport";

export class UserAPI extends HTTPTransport {
  constructor() {
    super('/user');
  }

  changeProfileReq(data: IChangeProfile): Promise<IChangeProfile & { id: string }> {
    return this.put('/profile', data);
  }

  changeAvatarReq(data: FormData): Promise<IUserData> {
    return this.put('/profile/avatar', data);
  }

  changePasswordReq(data: IChangePassword): Promise<void> {
    return this.put('/password', data);
  }

  findUserReq(data: { login: string }): Promise<IUserData[]> {
    return this.post('/search', data);
  }
}

export default new UserAPI();