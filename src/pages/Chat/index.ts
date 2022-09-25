import Block from '../../utils/Block';
import styles from './chat.sass';
import { userData } from "../../fakeApi/userData";
import ChatsController from "../../controllers/ChatsController";
import store, { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import { getInputsValues } from "../../utils/getInputsValues";
import userController from "../../controllers/UserController";
import chatsController from "../../controllers/ChatsController";



interface ChatPageProps {
  handleChatClick: (e: Event) => void,
  handleCreateNewChat: (e: Event) => void,
  onComposeClick: (e: Event) => void,
  handleUserAddToChat: (e: Event) => void,
  handleUserRemove: (e: Event) => void,
}

class ChatPageBase extends Block {

  constructor(props: ChatPageProps) {
    super({
      ...props,
      handleChatClick: (e: Event) => this.handleChatClick(e),
      handleCreateNewChat: (e: Event) => this.handleCreateNewChat(e),
      onComposeClick: () => this.onComposeClick(),
      handleUserAdd: (e: Event) => this.handleUserAdd(e),
      handleUserRemove: (e: Event) => this.handleUserRemove(e),
      userData: userData,
      selectedChat: {},
      styles
    });
  }

  onComposeClick() {
    const modalWindow = document.getElementById("modal-window-create-chat")
    modalWindow!.classList.add('modal-window_visible')
  }

  handleCreateNewChat(e: Event) {
    e.preventDefault()
    const chatName = getInputsValues().chat_name;
    ChatsController.createChat({title: chatName})
    this.refs.modalNewChat.setProps({modalState: ''})
  }

  async handleUserAdd(e: Event) {
    e.preventDefault()
    const values = getInputsValues()
    const userName: any = await userController.findUser({login: values.login_add_user})
    const userId: number = userName[0].id
    const chatId: number = this.props.chat.id
    await chatsController.addChatUser({users: [userId], chatId: chatId})
    this.refs.modalUserAdd.setProps({modalState: ''})
  }

  async handleUserRemove(e: Event) {
    e.preventDefault()
    const values = getInputsValues()
    const userName: any = await userController.findUser({login: values.login_remove_user})
    const userId: number = userName[0].id
    const chatId: number = this.props.chat.id
    await chatsController.removeChatUser({users: [userId], chatId: chatId})
    this.refs.modalUserRemove.setProps({modalState: ''})
  }

  handleChatClick(e: Event) {
    const targetEl = e.target as Element;
    const targetElLi = targetEl!.closest('li');
    const targetElId: string = targetElLi!.id;
    const chatToOpen = store.state.chats.find((chat: Record<string, string>) => chat.id.toString() === targetElId)
    this.setProps({chat: chatToOpen})
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
                                selectedChat=this.selectedChat
                                onClick=handleChatClick
                        }}
                        {{/Chat}}
                    </ul>

                </section>

                {{#ChatWindow
                        chat=this.chat
                        onSendMessage=onSendMessage
                }}
                {{/ChatWindow}}


            </div>


            {{#ModalWindow
                    ref="modalNewChat"
                    id="modal-window-create-chat"
                    onSubmit=handleCreateNewChat
            }}
                <section class="modal">
                    <span class="modal__close-icon" id="close-icon"></span>

                    <form class="chat__modal-form" method="GET" action="#" name="createNewChat">

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

                        {{#Button class="button" type="submit"}}
                            Create chat
                        {{/Button}}

                    </form>
                </section>
            {{/ModalWindow}}


            {{#ModalWindow
                    ref="modalUserAdd"
                    id="modal-window-add-user"
                    onSubmit=handleUserAdd
            }}
                <section class="modal">
                    <span class="modal__close-icon" id="close-icon"></span>

                    <form class="chat__modal-form" method="GET" action="#" name="addUserToChat">
                        <h2 class="chat__modal-title">Add user to the chat</h2>

                        {{#Input
                                inputContainerClass="form__input-floating-label-group"
                                labelClass="form__input-floating-label"
                                inputClass="form__input"
                                id="modal_add_user"
                                type="text"
                                name="login_add_user"
                                value=""
                                required="required"
                                label="Enter login"
                                errorClass="form__error"
                                errorText="error in login"
                                ref="add_user_to_chat"
                        }}
                        {{/Input}}

                        {{#Button class="button" type="submit"}}
                            Add user
                        {{/Button}}
                    </form>

                </section>
            {{/ModalWindow}}
            
            {{#ModalWindow
                    ref="modalUserRemove"
                    id="modal-window-remove-user"
                    onSubmit=handleUserRemove
            }}
                <section class="modal">
                    <span class="modal__close-icon" id="close-icon"></span>

                    <form class="chat__modal-form" method="GET" action="#" name="removeUserFromChat">
                        <h2 class="chat__modal-title">Remove user from the chat</h2>

                        {{#Input
                                inputContainerClass="form__input-floating-label-group"
                                labelClass="form__input-floating-label"
                                inputClass="form__input"
                                id="modal_remove_user"
                                type="text"
                                name="login_remove_user"
                                value=""
                                required="required"
                                label="Enter login"
                                errorClass="form__error"
                                errorText="error in login"
                                ref="chat_name"
                        }}
                        {{/Input}}

                        {{#Button class="button" type="submit" onClick=handleUserRemoveFromChat}}
                            Remove user
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
