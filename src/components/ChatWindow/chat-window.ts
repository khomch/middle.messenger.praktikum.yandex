import Block from '../../utils/Block';
import styles from './chat-window.sass'
import ChatsController from "../../controllers/ChatsController";


interface IChatWindow {
  chat: Record<string, any>;
  styles: Record<string, string>
  onClick: (e: Event) => void
  handleAddUserClick: (e: Event) => void,
  handleRemoveUserClick: (e: Event) => void,
  handleDeleteChat: (e: Event) => void,
  onSendMessage: (e: Event) => void

}

export class ChatWindow extends Block<IChatWindow> {

  constructor(props: IChatWindow) {
    super({
        ...props,
        onSendMessage: (e: Event) => this.onSendMessage(e),
        handleAddUserClick: () => this.handleAddUserClick(),
        handleRemoveUserClick: () => this.handleRemoveUserClick(),
        handleDeleteChat: () => this.handleDeleteChat(),
        styles
      },
    );
  }

  onSendMessage(e: Event) {
    console.log(42, e.target)
  }

  handleAddUserClick() {
    const modalWindow = document.getElementById("modal-window-add-user")
    modalWindow!.classList.add('modal-window_visible')
  }

  handleRemoveUserClick() {
    const modalWindow = document.getElementById("modal-window-remove-user")
    modalWindow!.classList.add('modal-window_visible')
  }

  async handleDeleteChat() {
    const chatId: number = this.props.chat.id;
    await ChatsController.deleteChat({chatId: chatId})
  }


  render() {

    // language=hbs
    if (!this.props.chat) {
      return `
          <section class="chat chat_no-chat">
              <div class="chat-container chat-container_no-chat">
                  <p class="chat-not-selected">Select a chat to start messaging</p>
              </div>
          </section>
      `
    }

    // language=hbs

    return `

        <section class="chat">
            <div class="chat-container">
                <div class="chat-container__top">
                    <div class="chat-container__userdata">
                        {{#Avatar
                                classModificator="avatar_chat-window"
                                src=this.chat.avatar
                                alt=this.chat.title
                        }}
                        {{/Avatar}}
                        <p class="chat-container__name">{{this.chat.title}}</p>
                    </div>
                    <div class="chat-container__actions">
                        {{#Button class="button__add" onClick=handleAddUserClick}}
                        {{/Button}}
                        {{#Button class="button__remove" onClick=handleRemoveUserClick}}
                        {{/Button}}
                        {{#Button class="button__delete-chat" onClick=handleDeleteChat}}
                        {{/Button}}
                    </div>
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
                    {{#Button class="compose-form__send-message" type="submit" onClick=onSendMessage}}
                    {{/Button}}
                </form>
            </div>

        </section>



    `
  }
}