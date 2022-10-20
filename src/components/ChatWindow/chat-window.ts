import Block from '../../utils/Block';
import styles from './chat-window.sass'
import ChatsController from "../../controllers/ChatsController";
import store, { withStore } from "../../utils/Store";
import { getInputsValues } from "../../utils/getInputsValues";
import MessagesController from "../../controllers/MessagesController";


interface IChatWindow {
  messagesToRender: any;
  selectedChat: Record<string, any>;
  chat: Record<string, any>;
  styles: Record<string, string>
  onClick: (e: Event) => void;
  handleAddUserClick: (e: Event) => void;
  handleRemoveUserClick: (e: Event) => void;
  handleDeleteChat: (e: Event) => void;
  handleSendMessage: (e: Event) => void;
  messages: any;

}

export class ChatWindowBase extends Block<IChatWindow> {

  constructor(props: IChatWindow) {
    super({
        ...props,
        handleSendMessage: (e: Event) => this.handleSendMessage(e),
        handleAddUserClick: () => this.handleAddUserClick(),
        handleRemoveUserClick: () => this.handleRemoveUserClick(),
        handleDeleteChat: () => this.handleDeleteChat(),
        styles
      },
    );
  }

  handleSendMessage(e: Event) {
    e.preventDefault()
    const data = getInputsValues();
    MessagesController.sendMessage(store.state.chatToOpen.id, data.message)
    const inputMessage = document.getElementById('input-message') as HTMLInputElement;
    inputMessage.value = '';
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
    const chatId: number = this.props.selectedChat.id;
    await ChatsController.deleteChat({chatId: chatId})
  }

  renderMessages(messages: any) {
    return this.props.messagesToRender = messages
  }

  protected init() {
    this.renderMessages(this.props.messages)

  }


  render() {

    // language=hbs
    if (!store.state.chatToOpen) {
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
                        {{#each messagesToRender}}
                            {{#Message
                                    content=this.content
                                    time=this.time
                                    id=this.user_id
                            }}
                            {{/Message}}
                        {{/each}}


                    </ul>
                </div>

                <form class="compose-form" method="GET" action="#" name="send-message">
                    <div class="compose-form__attach-button"></div>
                    {{#Input
                            inputContainerClass="compose-form__input-container"
                            inputClass="compose-form__input"
                            type="text"
                            name="message"
                            id="input-message"
                            placeholder="Write a message..."
                            value=""
                            required="required"
                            errorText="error in Message"
                            ref="message"
                    }}
                    {{/Input}}
                    {{#Button class="compose-form__send-message" type="submit" onClick=handleSendMessage}}
                    {{/Button}}
                </form>
            </div>

        </section>



    `
  }
}


const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.chatToOpen && state.chatToOpen.id;
  if (!selectedChatId) {

    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.chatToOpen,
    userId: state.user.id
  };
});

export const ChatWindow = withSelectedChatMessages(ChatWindowBase);