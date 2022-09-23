import Block from '../../utils/Block';
import styles from './chat.sass'
import ChatsController from "../../controllers/ChatsController";

interface IChat {
  events: {
    click: (e: Event) => void
  },
  styles: Record<string, string>
  onClick: (e: Event) => void

}

export class Chat extends Block<IChat> {

  constructor(props: IChat) {
    super({
        ...props,
        events: {
          click: (e: Event) => this.onClick(e)
        },
        styles
      },
    );
  }

  onClick(e: Event) {
    const targetEl = e.target as Element;
    const targetElLi = targetEl!.closest('li');
    const targetElId: string = targetElLi!.id;
    console.log(targetElId)


    // ChatsController.deleteChat({chatId: targetElId})
  }

  render() {

    // language=hbs
    return `
        <ul class="chats__list">
            {{#each chats}}
                <li class="chats__list-item" id="{{this.id}}">
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
    `
  }
}