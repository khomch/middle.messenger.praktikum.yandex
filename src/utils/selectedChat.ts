import { ISelectedChat } from "../../interfaces/ISelectedChat";

export const selectedChat: ISelectedChat = {
  image: 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png',
  name: "Frodo",
  messages: [
    {
      date: '2022-08-25',
      time: '12:15',
      sender: 'frodo',
      message: "There is no real going back. Though I may come to the Shire, it will not seem the same; for I shall not be the same. I am wounded with knife, sting, and tooth, and a long burden. Where shall I find rest rest?"
    },
    {
      date: '2022-08-25',
      time: '12:16',
      sender: 'you',
      message: "Be careful carefulcarefulcareful careful"
    },
    {
      date: '2022-08-25',
      time: '12:18',
      sender: 'frodo',
      message: "Bilbo used often to say there was only one Road; that it was like a great river: its springs were at every doorstep, and every path was its tributary."
    },
  ]
}