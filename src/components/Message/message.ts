import Block from '../../utils/Block';
import store from "../../utils/Store";

interface IMessage {
  id: string,

}

export class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super({
        ...props,
      }
    );
  }

  render() {
   if (store.state.user.id === this.props.id) {
     // language=hbs
     return `
         <li class="message message_from">
             <div class="message__container message__container_from">
                 <p class="message__text">
                     {{content}}
                 </p>
                 <time class="message__time">{{time}}</time>
             </div>
         </li>
    `
   } else {
     // language=hbs
     return `
        <li class="message">
            <div class="message__container">
                <p class="message__text">
                    {{content}}
                </p>
                <time class="message__time">{{time}}</time>
            </div>
        </li>
    `
   }

  }
}