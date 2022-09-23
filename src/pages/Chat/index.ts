import Block from '../../utils/Block';
import styles from './chat.sass';
import { userData } from "../../fakeApi/userData";
import { selectedChat } from "../../fakeApi/selectedChat";
import ChatsController from "../../controllers/ChatsController";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import { getInputsValues } from "../../utils/getInputsValues";


interface ChatPageProps {
  onChatsClick: (e: Event) => void,
  onCreateChatSubmit: (e: Event) => void,
  onComposeClick: (e: Event) => void,

}

class ChatPageBase extends Block {

  constructor(props: ChatPageProps) {
    super({
      ...props,
      onChatsClick: (e: Event) => this.onChatsClick(e),
      events: {
        submit: (e: Event) => this.onCreateChatSubmit(e)
      },
      onCreateChatSubmit: (e: Event) => this.onCreateChatSubmit(e),
      onComposeClick: () => this.onComposeClick(),
      userData: userData,
      selectedChat: selectedChat,
      styles
    });
  }

  onComposeClick() {
    const modalWindow = document.getElementById("modal-window")
    modalWindow!.classList.add('modal-window_visible')
  }

  onCreateChatSubmit(e: Event) {
    e.preventDefault()
    const chatName = getInputsValues().chat_name;
    ChatsController.createChat({title: chatName})
    this.refs.modal.setProps({modalState: ''})
  }

  onChatsClick(e: Event) {
    // e.stopImmediatePropagation()
    // console.log(e.currentTarget)
    // ChatsController.createChat({title: 'Chat Ice 1'})
    // ChatsController.deleteChat({chatId: 936})
    // ChatsController.getChatUsers("940")
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
        <section class="chat-page">

            <div class="chat-window">
                <section class="chats">
                    <div class="chats-userinfo-and-search">
                        <div class="chats__userinfo">
                            <div class="user-in-chat">
                                <div class="user-in-chat__avatar-container">
                                    {{#Avatar
                                            classModificator="avatar_small"
                                            src=this.user.avatar
                                            alt=this.user.name
                                    }}
                                    {{/Avatar}}
                                </div>
                                <span class="user-in-chat__data">{{this.user.first_name}} {{this.user.second_name}}</span>
                            </div>
                            <a href="/settings" class="chats__profile-link">Profile &#8594;</a>
                        </div>
                    </div>

                    <div class="chats__search-and-compose">
                        <input class="chats__search-input" name="search" placeholder="Find user"></input>
                        <div class="compose">
                            {{#Button class="chats-compose-icon" onClick=onComposeClick}}
                            {{/Button}}
                        </div>
                    </div>

                    <ul class="chats__list">
                        {{#Chat 
                                chats=this.chats 
                                onClick=onChatsClick}}
                        {{/Chat}}
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
            </div>


            {{#ModalWindow
                    ref="modal"
                    id="modal-window"
            }}
                <section class="modal">
                    <span class="modal__close-icon" id="close-icon"></span>
                    <form class="chat__modal-form" method="GET" action="#" name="createChat">
                        <h2 class="chat__modal-title">Create new chat</h2>

                        {{#Input
                                inputContainerClass="form__input-floating-label-group"
                                labelClass="form__input-floating-label"
                                inputClass="form__input"
                                id="modal_chatname"
                                type="text"
                                name="chat_name"
                                value=""
                                required="required"
                                label="Chat name"
                                errorClass="form__error"
                                errorText="error in First name"
                                ref="chat_name"
                        }}
                        {{/Input}}

                        {{#Button class="button" type="submit" onSubmit=onCreateChatSubmit}}
                            Create chat
                        {{/Button}}

                    </form>
                </section>
            {{/ModalWindow}}


        </section>


    `
  }
}

const withState = withStore((state) => ({...state}))

export const ChatPage = withState(ChatPageBase);
