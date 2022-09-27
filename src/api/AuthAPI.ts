import { IUserData } from "../interfaces/IUser";
import { HTTPTransport } from "../utils/fetch";

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


export class AuthAPI extends HTTPTransport {
  constructor() {
    super('/auth');
  }

  signin(data: ISigninData): Promise<void> {
    return this.post('/signin', data);
  }

  signup(data: ISignUpData): Promise<{ id: number }> {
    return this.post('/signup', data);
  }

  read(): Promise<IUserData> {
    return this.get('/user');
  }

  logout(): Promise<void> {
    return this.post('/logout');
  }
}

export default new AuthAPI();