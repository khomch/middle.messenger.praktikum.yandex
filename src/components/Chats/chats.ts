import Block from '../../utils/Block';
import styles from './chats.sass'

interface IChats {
  events: {
    click: (e: Event) => void;
  },
  styles: Record<string, string>;
  onClick: (e: Event) => void;

}

export class Chats extends Block<IChats> {

  constructor(props: IChats) {
    super({
        ...props,
        events: {
          click: (e: Event) => props.onClick(e)
        },
        onClick: (e: Event) => props.onClick(e),
        styles
      },
    );
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
                            <p class="chats__list-item-last-message">{{this.last_message.content}}</p>
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