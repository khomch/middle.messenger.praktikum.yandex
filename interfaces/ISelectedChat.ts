import { IMessage } from "./IMessage";

export interface ISelectedChat {
  image: string,
  name: string,
  messages: IMessage[]
}