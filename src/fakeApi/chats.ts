import {userData} from "./userData";
import noAvatar from "../static/no-avatar.svg";
import {IChats} from "../interfaces/IChats";

export const chats: IChats[] = [
  {
    image: noAvatar,
    name: userData.firstName,
    time: '13:15',
    lastMessage: "Hi! It's me"
  },
  {
    image: noAvatar,
    name: 'Andrew',
    time: '13:11',
    lastMessage: "Please, call back"
  },
  {
    image: noAvatar,
    name: 'Awesome channel',
    time: '13:10',
    lastMessage: "Who will win the..."
  },
  {
    image: noAvatar,
    name: 'Masha',
    time: '13:08',
    lastMessage: "I will bring a bottle"
  },
  {
    image: noAvatar,
    name: 'John',
    time: '13:07',
    lastMessage: "Whaaaaaat?"
  },
  {
    image: noAvatar,
    name: 'Sam',
    time: '13:06',
    lastMessage: "Mordor is pretty far, you know. Take a train to Vystavochnaya"
  },
  {
    image: 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png',
    name: 'Frodo',
    time: '13:05',
    lastMessage: "Sam will explain"
  },
  {
    image: noAvatar,
    name: 'Gollum',
    time: '13:04',
    lastMessage: "Never trust Sam"
  },
  {
    image: noAvatar,
    name: 'Gendalf',
    time: '13:01',
    lastMessage: "Run, fools"
  },
  {
    image: noAvatar,
    name: 'Pippin',
    time: '12:01',
    lastMessage: "Hello!"
  },
  {
    image: noAvatar,
    name: 'Ada',
    time: '13:01',
    lastMessage: "Run, fools"
  },
  {
    image: noAvatar,
    name: 'Rere',
    time: '12:01',
    lastMessage: "What is going on brrah?"
  }
]