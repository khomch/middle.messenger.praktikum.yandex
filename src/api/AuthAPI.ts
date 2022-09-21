import { BaseAPI } from "./BaseAPI";
import { IUserData } from "../interfaces/IUser";

export interface ISigninData {
  login: string;
  password: string;
}

export interface ISignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}


export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: ISigninData) {
    return this.http.post('/signin', data);
  }

  signup(data: ISignUpData) {
    return this.http.post('/signup', data);
  }

  read(): Promise<IUserData>{
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();