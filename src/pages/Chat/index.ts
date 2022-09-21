import Block from '../../utils/Block';
import styles from './chat.sass';
import { userData } from "../../fakeApi/userData";
import { selectedChat } from "../../fakeApi/selectedChat";
import ChatsController from "../../controllers/ChatsController";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";


interface ChatPageProps {
  onSubmit: (e: Event) => void,
}

class ChatPageBase extends Block {
  constructor(props: ChatPageProps) {
    super({
      ...props,
      onSubmit: () => this.onSubmit(),
      userData: userData,
      selectedChat: selectedChat,
      styles
    });
  }


  onSubmit() {
    // ChatsController.createChat({title: 'Chat Ice 1'})
    // ChatsController.deleteChat({chatId: 936})
    ChatsController.getChatUsers("940")
    // ChatsController.usersRequest({users: [59778], chatId: 940})

  }

  setChats() {
    if (!this.props.chats) {
      ChatsController.getChats();
    }
    else return
  }

  setUser() {
    if (!this.props.user) {
      AuthController.fetchUser();
    }
    else return
  }

  render() {
    this.setChats()
    this.setUser()

    // language=hbs
    return `
        <section class="chat-window">
            <section class="chats">
                <div class="chats-userinfo-and-search">
                    <div class="chats__userinfo">
                        <div class="user-in-chat">
                            <div class="user-in-chat__avatar-container">
                                {{#Avatar classModificator="avatar_small" src=userData.avatarUrl
                                          alt=userData.avatarAlt }}
                                {{/Avatar}}
                            </div>
                            <span class="user-in-chat__data">{{this.user.first_name}} {{this.user.second_name}}</span>
                        </div>
                        <a href="/settings" class="chats__profile-link">Профиль &#8594;</a>
                    </div>
                </div>

                <div class="chats__search-and-compose">
                    <input class="chats__search-input" name="search" placeholder="Поиск"></input>
                    <div class="compose">
                        <button class="chats-compose-icon"></button>
                    </div>
                </div>

                <ul class="chats__list">
                    {{#each this.chats}}
                        <li class="chats__list-item">
                            <div class="chats__list-item-avatar-name-message">
                                {{#Avatar classModificator="avatar_chat" src=this.avatar src=this.title }}
                                {{/Avatar}}
                                <div class="chats__list-item-name-and-message">
                                    <p class="chats__list-item-message-username">{{this.title}}</p>
                                    <p class="chats__list-item-last-message">{{this.last_message}}</p>
                                </div>
                            </div>
                            <div class="chats__list-item-date-and-counter">
                                <p class="chats__list-item-message-time">{{this.time}}</p>
                                <div class="chats__list-item-message-counter">{{this.unread_count}}</div>
                            </div>
                        </li>
                    {{/each}}
                </ul>
            </section>

            <section class="chat">
                <div class="chat-container">
                    <div class="chat-container__top">
                        <div class="chat-container__userdata">
                            <img class="avatar avatar_chat-window" src={{selectedChat.image}}
                                 alt={{selectedChat.name}} />
                            <p class="chat-container__name">{{selectedChat.name}}</p>
                        </div>
                        <button class="chat-container__edit-button"></button>
                    </div>
                    <div class="chat-container__window">
                        <ul class="chat-container__messages">
                            {{#each selectedChat.messages}}
                                <li class="message">
                                    <div class="message__container">
                                        <p class="message__text">
                                            {{this.message}}
                                        </p>
                                        <div class="message__time">{{this.time}}</div>
                                    </div>
                                </li>
                            {{/each}}
                            <div class="message message_from">
                                <div class="message__container message__container_from">
                                    <p class="message__text">
                                        What?!
                                    </p>
                                    <div class="message__time">15:02</div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <form class="compose-form">
                        <button class="compose-form__attach-button"></button>
                        {{#Input
                                inputContainerClass="compose-form__input-container"
                                inputClass="compose-form__input"
                                type="text"
                                name="message"
                                placeholder="Write a message..."
                                value=""
                                required="required"
                                errorText="error in Message"
                                ref="message"
                        }}
                        {{/Input}}
                        {{#Button class="compose-form__send-message" type="submit" onClick=onSubmit}}
                        {{/Button}}
                    </form>
                </div>
            </section>
        </section>
    `
  }
}

const withState = withStore((state) => ({...state}))

export const ChatPage = withState(ChatPageBase);
